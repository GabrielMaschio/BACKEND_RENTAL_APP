const z = require('zod');

exports.rentalValidation = z.object({
    car_fk: z.number().int().positive(),
    customer_fk: z.number().int().positive(),
    rental_days: z.number().int().positive(),
    start_date: z.string(),
    end_date: z.string(),
    total_price: z.number().min(0),
    status : z.boolean()
});