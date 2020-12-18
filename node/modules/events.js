//Events Module
//The module provides utilities for working with events.

const EventEmitter = require("events"); //Capital because this is a class
const emitter = new EventEmitter(); // Creating instnace of the EventEmitter class

console.log(EventEmitter); // Events class
console.log(emitter); // Emitter instance

//Listeners First
emitter.addListener("messageLogged", () => console.log("Listener One")); //Listens for an event, argument is event and callback function
emitter.on("messageLogged", () => console.log("Listener Two")); //Listens for an event, argument is event and callback function
emitter.on("messageLogged", arg => console.log(arg)); //Listens for an event and passes a callback function that expects an argument object
emitter.on("logging", arg => console.log(arg.message)); //Listens for an event and passes a callback function that expect an argument object

//Raising Events
emitter.emit("messageLogged"); //Raises an event, argument is name of event
emitter.emit("messageLogged", { id: 1, url: "http://ww.google.com" }); //Raises and event, argument is name of event and event object
emitter.emit("logging", { id: 1, message: "Hello World" });

//Using Emitters
//Create a separate class that inherits from Event Emitter so listening and raising are shared by same emitter
class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP Request

        console.log(message);

        //Raise an Event
        this.emit("logging", { id: 1, message: message });
    }
}

module.exports = Logger;

//Emitter Test - This would wherever you want to use the emitter
const Logger = require("./emitterFile");
const logger = new Logger();

//Event Listener
logger.on("logging", arg => {
    console.log(arg);
});

//Raises Event
logger.log("Hello World");
