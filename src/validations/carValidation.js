const { z } = require('zod');

exports.carValidation = z.object({
    name: z.string().min(3).max(255),
    brand: z.string().min(3).max(255),
    license_plate: z.string().min(7).max(7),
    year: z.string().min(4),
    rental_price: z.number().min(0),
    category_fk: z.number().int().positive()
});