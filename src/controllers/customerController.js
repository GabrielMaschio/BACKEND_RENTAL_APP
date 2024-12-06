const { createCustomer, getCustomers, getById, updateCustomer, removeCustomer } = require('../repositories/customerRepository');
const bcrypt = require('bcrypt');
const { customerValidation, updateCustomerValidation } = require('../validations/customerValidation')

exports.create = async(req, res) => {
    try {
        const data = customerValidation.parse(req.body)
        data.password = await bcrypt.hash(req.body.password, 10);
        const customer = await createCustomer(data);
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send("Customer Controller: " + error);
    }
}

exports.getAll = async(req, res) => {
    try {
        const customers = await getCustomers();
        res.status(200).send(customers);
    } catch (error) {
        res.status(500).send("Customer Controller: " + error);
    }
}

exports.getId = async(req, res) => {
    try {
        const customer = await getById(Number(req.params.customer_id));
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send("Customer Controller: " + error);
    }
}

exports.update = async(req, res) => {
    try {
        const data = updateCustomerValidation.parse(req.body);
        const customer = await updateCustomer(Number(req.params.customer_id), data);
        res.status(200).send(customer);
    } catch (error) {
        res.status(500).send("Customer Controller: " + error);
    }
}

exports.remove = async(req, res) => {
    try {
        await removeCustomer(Number(req.params.customer_id))
        res.status(200).send();
    } catch (error) {
        res.status(500).send("Customer Controller: " + error);
    }
}