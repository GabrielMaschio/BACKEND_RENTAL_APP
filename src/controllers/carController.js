const { createCar, getCars, getById, updateCar, removeCar, getAvailableCars } = require('../repositories/carRepository');
const { carValidation } = require('../validations/carValidation');

exports.create = async(req, res) => {
    try {
        const data = carValidation.parse(req.body);
        const car = await createCar(data);
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send("Controller - Create Car: " + error);
    }
}

exports.getAll = async(req, res) => {
    try {
        const car = await getCars();
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send("Controller - Get All Car: " + error);
    }
}

exports.getId = async(req, res) => {
    try {
        const car = await getById(Number(req.params.car_id));
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send("Controller - Get Id Car: " + error);
    }
}

exports.update = async(req, res) => {
    try {
        const data = carValidation.parse(req.body);
        const car = await updateCar(Number(req.params.car_id), data);
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send("Controller - Update Car: " + error);
    }
}

exports.remove = async(req, res) => {
    try {
        await removeCar(Number(req.params.car_id));
        res.status(200).send();
    } catch (error) {
        res.status(500).send("Controller - Remove Car: " + error);
    }
}

exports.getAvailable = async(req, res) => {
    try {
        const cars = await getAvailableCars();
        
        if (!cars.length) {
            return res.status(404).send({ message: 'Nenhum carro disponível no momento' });
        }

        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send("Car Controller: " + error);
    }
}
