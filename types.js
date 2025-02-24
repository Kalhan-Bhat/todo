const z = require("zod");

const createtodo = z.object({
    title: z.string(),
    description: z.string()
});

const updatetodo = z.object({
    id: z.string(),
    completed: z.boolean()
});

module.exports = { createtodo, updatetodo };
