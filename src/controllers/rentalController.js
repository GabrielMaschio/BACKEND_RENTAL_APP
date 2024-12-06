const { createRental, getRentals, getById, updateRental, removeRental, getRentalByClientId } = require('../repositories/rentalRepository');
const { rentalValidation } = require('../validations/rentalValidation');

exports.create = async(req, res) => {
    try {
        const data = rentalValidation.parse(req.body);
        const rental = await createRental(data);
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}

exports.getAll = async(req, res) => {
    try {
        const rentals = await getRentals();
        res.status(200).send(rentals);
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}

exports.getId = async(req, res) => {
    try {
        const rental = await getById(Number(req.params.rental_id));
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}

exports.getByClientId = async(req, res) => {
    try {
        const rental = await getRentalByClientId(req.params.client_id);
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}

exports.update = async(req, res) => {
    try {
        const data = rentalValidation.parse(req.body);
        const rental = await updateRental(Number(req.params.rental_id), data);
        res.status(200).send(rental);
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}

exports.remove = async(req, res) => {
    try {
        await removeRental(Number(req.params.rental_id));
        res.status(200).send();
    } catch (error) {
        res.status(500).send("Rental Controller: " + error);
    }
}