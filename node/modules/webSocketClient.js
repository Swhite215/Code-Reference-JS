const WebSocket = require('ws');

let ws = new WebSocket("ws://localhost:3000");

//WebSocket is listening for open
ws.onopen = function() {
    setTitle("Connected to Cyber Chat");
};

//WebSocket is listening for close
ws.onclose = function() {
    setTitle("DISCONNECTED");
};

//Websocket is listening for message
ws.onmessage = function(payload) {
    printMessage(payload.data);
};

document.forms[0].onsubmit = function() {
    let input = document.getElementById("message");
    input.value = "";
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    let p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
