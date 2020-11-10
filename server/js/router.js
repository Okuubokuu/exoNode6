const { handleErrorRequest } = require('./middlewareError')

module.exports.Router = class Router{
    constructor(){
        this.routerPathGet = [];
        this.routerPathPost = [];
        this.routerPathDelete = [];
        this.routerPathUpdate = [];
    }

    isExistGetPath(url){
        if (this.routerPathGet.indexOf(url)) {
            return true;
        }
        handleErrorRequest(rest, 404, `${url} doesn't être là dans your GET routeur`)
    }
}