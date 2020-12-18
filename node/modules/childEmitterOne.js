const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("test", data => {
    process.stdout.write(JSON.stringify(data));
    //console.log("Test Event Emitted");
});

let myInterval = setInterval(() => {
    emitter.emit("test", { name: "Spencer" });
}, 1000);

//Method to exit process when data event occurs
process.stdin.on("data", data => {
    clearInterval(myInterval);
    console.log("Emitter is being stopped.");
    process.exit();
});
