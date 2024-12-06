const { prisma } = require('../services/prisma');

exports.createCustomer = async (data) => {
    const customer = await prisma.customer.create({
        data,
        select: {
            customer_id: true,
            name: true,
            email: true,
            phone: true
        }
    });

    return customer;
}

exports.getCustomers = async () => {
    const customers = await prisma.customer.findMany({
        select: {
            customer_id: true,
            name: true,
            email: true,
            phone: true,
            createdAt: true
        },
        orderBy: {
            name: 'asc'
        }
    });
    return customers;
}

exports.getById = async (customer_id) => {
    const customer = await prisma.customer.findUnique({
        where: {
            customer_id
        },
        select: {
            customer_id: true,
            name: true,
            email: true,
            phone: true
        }
    });
    return customer;
}

exports.updateCustomer = async (customer_id, data) => {
    const customer = await prisma.customer.update({
        where: {
            customer_id
        },
        select: {
            customer_id: true,
            name: true,
            email: true,
            phone: true
        },
        data
    })
    return customer;
}

exports.removeCustomer = async(customer_id) => {
    await prisma.customer.delete({
        where: {
            customer_id
        }
    })

    return;
}