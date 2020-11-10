const http = require('http');
const cour = require('./cour');
const { handleGetRequest } = require('./middleware');

const server = http.createServer(function(request, response){
    if (request.method === "GET") {
        handleGetRequest(request, response);
    } else if (request.method === "POST") {
        
    } else if (request.method === "POST") {

    } else if (request.method === "POST") {

    } else {
        handleErrorRequest(response, statusCode, message);
    }
});

server.listen(3000, function(){
    console.log('server oui...');
});