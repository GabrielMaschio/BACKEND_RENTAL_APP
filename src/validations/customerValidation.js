const { z } = require('zod'); 

exports.customerValidation = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    phone: z.string().min(10).max(15), 
    password: z.string().min(8).max(255)
});

exports.updateCustomerValidation = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    phone: z.string().min(10).max(15)
});