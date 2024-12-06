const { getCustomer } = require('../repositories/authRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authValidation } = require('../validations/auth');

exports.login = async(req, res) => {
    try {
        const data = authValidation.parse(req.body);
        const customer = await getCustomer(data.email);

        if(!customer) return res.status(401).send({ message: 'Usuário ou senha inválidos!' });

        if(customer && bcrypt.compareSync(req.body.password, customer.password)) {
            const token = jwt.sign(
                {
                    id: customer.customer_id,
                    email: customer.email,
                    name: customer.name,
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '24h',
                }
            );
            return res.status(200).send({ token });
        } {
            return res.status(401).send({ message: 'Usuário ou senha inválidos!' });
        }
    } catch (e) {
        return res.status(400).send(e);
    }
}

exports.validateToken = async(req, res) => {
    try {
        const token = req.headers.authorization;

        if(!token) {
            return res.status(401).send({ message: 'Token não informado!' });
        }

        const replace = token.replace('Bearer ', '');
        
        try {
            const decoded = jwt.verify(replace, process.env.TOKEN_KEY);
            const customer = await getCustomer(decoded.email);
            
            if(!customer) {
                return res.status(401).send({ message: 'Usuário não encontrado!' });
            }

            const userData = {
                id: customer.customer_id,
                name: customer.name,
                email: customer.email,
                role: customer.role
            };

            return res.status(200).send(userData);
        } catch(jwtError) {
            console.error('Erro JWT:', jwtError);
            return res.status(401).send({ 
                message: 'Token inválido ou expirado!',
                details: jwtError.message,
                location: 'JWT Verification'
            });
        }
    } catch(e) {
        console.error('Erro interno:', e);
        return res.status(500).send({ message: 'Erro interno do servidor' });
    }
}