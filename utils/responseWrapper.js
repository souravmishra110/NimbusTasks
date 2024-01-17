// src/utils/responseWrapper.js

const success = (data, message = 'Success') => ({
    success: true,
    data,
    message,
});

const error = (code, message = 'Error') => ({
    success: false,
    error: {
        code,
        message,
    },
});

module.exports = {
    success,
    error,
};
