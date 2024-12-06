const { create, getAll, getId, update, remove} = require('../controllers/customerController');
const { verifyToken } = require('../middlewares/authMiddleware');

exports.customerRoutes = app => {
    app.post('/customer', create);
    app.get('/customer', verifyToken, getAll);
    app.get('/customer/:customer_id', verifyToken, getId);
    app.put('/customer/:customer_id', verifyToken, update);
    app.delete('/customer/:customer_id', verifyToken, remove);
}