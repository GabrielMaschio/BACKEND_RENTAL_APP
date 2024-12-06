const { prisma } = require('../services/prisma');

exports.createRental = async(data) => {
    const rental = await prisma.rental.create({
        data,
    });
    return rental;
}

exports.getRentals = async () => {
    const rentals = await prisma.rental.findMany({
        select: {
            rental_id: true,
            rental_days: true,
            start_date: true,
            end_date: true,
            total_price: true,
            status: true,
            customer: {
                select: {
                    customer_id: true,
                    name: true,
                    email: true,
                    phone: true
                }
            },
            car: {
                select: {
                    car_id: true,
                    name: true,
                    brand: true,
                    license_plate: true,
                    year: true,
                    rental_price: true,
                    category: {
                        select: {
                            category_id: true,
                            name: true
                        }
                    }
                }
            }
        },
        orderBy: {
            status: 'desc'
        }
    });

    return rentals;
}

exports.getById = async(rental_id) => {
    const rental = await prisma.rental.findUnique({
        where: {
            rental_id
        },
        select: {
            rental_id: true,
            rental_days: true,
            start_date: true,
            end_date: true,
            total_price: true,
            status: true,
            customer: {
                select: {
                    customer_id: true,
                    name: true,
                    email: true,
                    phone: true
                }
            },
            car: {
                select: {
                    car_id: true,
                    name: true,
                    brand: true,
                    license_plate: true,
                    year: true,
                    rental_price: true,
                    category: {
                        select: {
                            category_id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });

    return rental;
}
    
exports.getRentalByClientId = async(customer_fk) => {
    if (!customer_fk) {
        throw new Error('customer_fk é obrigatório');
    }

    const rentals = await prisma.rental.findMany({
        where: {
            customer_fk: parseInt(customer_fk)
        },
        orderBy: {
            status: 'desc'
        },
        select: {
            rental_id: true,
            rental_days: true,
            start_date: true,
            end_date: true,
            total_price: true,
            status: true,
            car: {
                select: {
                    car_id: true,
                    name: true,
                    brand: true,
                    rental_price: true,
                    category: {
                        select: {
                            category_id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });
    return rentals;
}

exports.updateRental = async(rental_id, data) => {
    const rental = await prisma.rental.update({
        where: {
            rental_id
        },
        data
    });
    return rental;
}

exports.removeRental = async(rental_id) => {
    await prisma.rental.delete({
        where: {
            rental_id
        }
    });
    return;
}