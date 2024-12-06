const { createCategory, getCategories, getById, updateCategory, removeCategory } = require('../repositories/categoryRepository');
const { categoryValidation } = require('../validations/categoryValidation');

exports.create = async(req, res) => {
    try {
        const data = categoryValidation.parse(req.body);
        const category = await createCategory(data);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send("Controller - Create Category: " + error);
    }
}

exports.getAll = async(req, res) => {
    try {
        const categories = await getCategories();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send("Controller - GetAll Category: " + error);
    }
}

exports.getId = async(req, res) => {
    try {
        const category = await getById(Number(req.params.category_id));
        res.status(200).send(category);
    }
    catch (error) {
        res.status(500).send("Controller - GetId Category: " + error);
    }
}

exports.update = async(req, res) => {
    try {
        const data = categoryValidation.parse(req.body);
        const category = await updateCategory(Number(req.params.category_id), data);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send("Controller - Update Category: " + error);
    }
}

exports.remove = async(req, res) => {
    try {
        await removeCategory(Number(req.params.category_id));
        res.status(200).send();
    } catch (error) {
        res.status(500).send("Controller - Remove Category: " + error);
    }
}