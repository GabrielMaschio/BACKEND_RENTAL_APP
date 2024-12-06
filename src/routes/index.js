const { customerRoutes } = require('./customerRoute');
const { authRoutes } = require('./authRoute');
const { categoryRoutes } = require('./categoryRoute');
const { carRoutes } = require('./carRoute');
const { rentalRoutes } = require('./rentalRoute');

module.exports = (app) => {
    customerRoutes(app);
    authRoutes(app);
    categoryRoutes(app);
    carRoutes(app);
    rentalRoutes(app);
}