const { prisma } = require('../services/prisma');

exports.createCar = async(data) => {
    const car = await prisma.car.create({
        data,
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
    });

    return car;
}

exports.getCars = async() => {
    const cars = await prisma.car.findMany({
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
        },
        orderBy: {
            car_id: 'asc'
        }
    });

    return cars;
}

exports.getById = async(car_id) => {
    const car = await prisma.car.findUnique({
        where: {
            car_id
        },
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
    });

    return car;
}

exports.updateCar = async(car_id, data) => {
    const car = await prisma.car.update({
        where: {
            car_id
        },
        data
    })
    
    return car;
}

exports.removeCar = async(car_id) => {
    await prisma.car.delete({
        where: {
            car_id
        }
    })

    return;
}

exports.getAvailableCars = async() => {
    const cars = await prisma.car.findMany({
        where: {
            NOT: {
                Rental: {
                    some: {
                        status: true
                    }
                }
            }
        },
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
    });

    return cars;
}