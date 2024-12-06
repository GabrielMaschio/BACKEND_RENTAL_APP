const { prisma } = require('../services/prisma');

exports.createCategory = async(data) => {
    const category = await prisma.category.create({
        data,
    });

    return category;
}

exports.getCategories = async() => {
    const categories = await prisma.category.findMany({});

    return categories;
}

exports.getById = async(category_id) => {
    const category = await prisma.category.findUnique({
        where: {
            category_id
        }
    });

    return category;
}

exports.updateCategory = async(category_id, data) => {
    const category = await prisma.category.update({
        where: {
            category_id
        },
        data
    });

    return category;
}

exports.removeCategory = async(category_id) => {
    await prisma.category.delete({
        where: {
            category_id
        }
    });

    return;
}