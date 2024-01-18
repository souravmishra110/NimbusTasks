// src/utils/responseWrapper.js

function sendOk(res, message, code, data){
    if(!message)    message = 'records fetched successfully';

    return res.json({
        status: {code, message},
        data: data ? data : {}
    });
}

function badRequest(res, message, code, data){
    if(!message)    message = 'bad request';

    return res.status(400).json({
        status: {code, message},
        data: data ? data : {}
    });
}

function unprocessableEntity(res, message, code, data){
    if(!message)    message = 'missing parameters';

    return res.status(422).json({
        status: {code, message},
        data: data ? data : {}
    })
}

module.exports = {
    sendOk,
    badRequest,
    unprocessableEntity
};
