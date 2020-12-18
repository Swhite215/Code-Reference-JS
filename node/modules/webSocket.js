//Web Sockets
const webSocketServer = require("ws").Server;
const wss = new webSocketServer({ port: 3000 });

//Method to capture initial connection to Web Socket Server
wss.on("connection", socket => {
    socket.send("Welcome to cyber chat!");
});

//Polling - Checking the server to see if the atate has changed, requests timeout if information hasn't changed
//Long Polling - Receives Response
//WebSockets - Connect to socket server and leave connection open
//Data can be sent and broadcasted to open connections
//Protocol TCP and HTTP proxy
