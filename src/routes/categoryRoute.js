const { create, getAll, getId, update, remove } = require('../controllers/categoryController');
const { verifyToken } = require('../middlewares/authMiddleware');

exports.categoryRoutes = app => {
    app.post('/category', verifyToken, create);
    app.get('/category', getAll);
    app.get('/category/:category_id', verifyToken, getId);
    app.put('/category/:category_id', verifyToken, update);
    app.delete('/category/:category_id', verifyToken, remove);
}