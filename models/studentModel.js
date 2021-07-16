const Joi = require('joi');

const studentModel = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    age: Joi.number()
});

module.exports = studentModel;