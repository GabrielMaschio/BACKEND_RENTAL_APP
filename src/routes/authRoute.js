const { login, validateToken } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');

exports.authRoutes = (app) => {
    app.post('/login', login);
    app.get('/validate-token', verifyToken, validateToken);
};