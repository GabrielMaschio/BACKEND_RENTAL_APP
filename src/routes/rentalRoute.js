const { create, getAll, getId, update, remove, getByClientId } = require('../controllers/rentalController');
const { verifyToken } = require('../middlewares/authMiddleware');

exports.rentalRoutes = app => {
    app.post('/rental', verifyToken, create);
    app.get('/rental', verifyToken, getAll);
    app.get('/rental/:rental_id', verifyToken, getId);
    app.put('/rental/:rental_id', verifyToken, update);
    app.delete('/rental/:rental_id', verifyToken, remove);
    app.get('/rental/client/:client_id', verifyToken, getByClientId);
}