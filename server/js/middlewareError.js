const http = require("http");

class MiddlewareError{
    constructor(){

    }

    handleErrorRequest(res, statusCode, message){
        res.statusCode = statusCode;
        res.end(JSON.stringify({error: http.STATUS_CODES[statusCode], message: message}));
    }

}

module.exports = new MiddlewareError();