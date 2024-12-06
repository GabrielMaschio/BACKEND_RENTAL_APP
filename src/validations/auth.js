const { z } = require('zod');

exports.authValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(255)
});