const { prisma } = require('../services/prisma');

exports.getCustomer = async(email) => {
    const customer = await prisma.customer.findUnique({
        where: {
            email,
        },
    }); 
    
    return customer;
}