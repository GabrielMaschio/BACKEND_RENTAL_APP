const { create, getAll, getId, update, remove, getAvailable } = require('../controllers/carController');
const { verifyToken } = require('../middlewares/authMiddleware');

exports.carRoutes = app => {
    app.post('/car', verifyToken, create);
    app.get('/car', getAll);
    app.get('/car/:car_id', verifyToken, getId);
    app.put('/car/:car_id', verifyToken, update);
    app.delete('/car/:car_id', verifyToken, remove);
    app.get('/available', getAvailable);
};