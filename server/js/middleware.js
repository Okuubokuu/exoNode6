const cour = require('./cour');
const { Router } = require('./router');

class Middleware {
    constructor(){
        this.router
    }

    handleGetRequest(req, res) {
        res.setHeader('Content-Type', 'application/json; charset=UTF-8')
        res.statusCode = 200;
        if (isExistGetPath(res, require.url)) {
            res.end(JSON.stringify(cour.getCour))
        }
    };

    handlePostRequest(req, res) {

    };
    
    handleDeleteRequest(req, res) {

    };

    handleUpdateRequest(req, res) {

    }; 
}

module.exports = new Middleware();