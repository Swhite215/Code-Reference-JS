//HTTP Module
//The module provides utilities for working with http

//Requiring HTTP
const http = require("http");

console.log(http); // HTTP module
console.log(http.STATUS_CODES); //HTTP status codes
console.log(http.METHODS); //HTTP methods

//Creating a Server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        //Deals with empty path
        res.write("Hello World"); //Sends a chunk of the response body
        res.write("Hello Again"); //Sends a chunk of the response body
        res.end(); // Signals to the server all of the response headers and body have been sent
    }

    if (req.url === "/api/extra") {
        //Deals with api path
        res.write(JSON.stringify([1, 2, 3])); //Sends a chunk of the response body
        res.end(); // Signals to the server all of the response headers and body have been sent
    }
}); //Server is an EventEmitter

server.on("connection", socket => console.log("Listening")); //Will fire when user navigates to http://localhost:PORT

server.listen(3000); //Starts the HTTP server listening for connections
