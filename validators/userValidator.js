const Joi = require('joi');
const responseWrapper = require('../utils/responseWrapper');
const errorCodes = require('../utils/exceptions.json');

module.exports.validateAddUser = async (req, res, next) => {
    let hint = null;
    let schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
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
        return res.send({ "hint": hint, 'success': 'true' });
    }
};