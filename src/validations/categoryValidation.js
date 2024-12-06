const { z } = require('zod');

exports.categoryValidation = z.object({
    name: z.string().min(3).max(255)
});