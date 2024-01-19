const Joi = require('joi');
const responseWrapper = require('../utils/responseWrapper');
const errorCodes = require('../utils/exceptions.json');

module.exports.validateCreateTask = async (req, res, next) => {
    let hint = null;
    let schema = Joi.object({
        title: Joi.string().min(1).max(255).required(),
        description: Joi.string().max(1000),
        category: Joi.string().valid('work', 'personal', 'shopping', 'other'),
        dueDate: Joi.date().iso(),
        completed: Joi.boolean(),
        user: Joi.string().required(),
    });
    try {
        let res = await schema.validateAsync(
            req.body, { allowUnknown: true }
        );
        return next();
    }
    catch (err) {
        hint = null;
        if (err.details && err.details[0] && err.details[0]['message'])
            hint = err.details[0]['message'];
        responseWrapper.unprocessableEntity(res, errorCodes['10203'], '10203', { 'Hint': hint })
    }
};

module.exports.validateTaskById = async (req, res, next) => {
    let hint = null;
    let schema = Joi.object({
        id: Joi.string().length(24).hex().required(),
    });
    try {
        let res = await schema.validateAsync(
            req.params, { allowUnknown: true }
        );
        return next();
    }
    catch (err) {
        hint = null;
        if (err.details && err.details[0] && err.details[0]['message'])
            hint = err.details[0]['message'];
        responseWrapper.unprocessableEntity(res, errorCodes['10203'], '10203', { 'Hint': hint })
    }
};