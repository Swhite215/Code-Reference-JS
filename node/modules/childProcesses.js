//Child Processes Module
//The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen(3)
const exec = require("child_process");

console.log(exec);

//Execution Examples - Asynchronously Synchronous
exec.exec("start chrome http://www.google.com"); //Open URL in Chrome

exec.exec("cmd"); //Opens instance of command prompt

//List directories and then logs response - Linux
exec.exec("ls", (err, stdout) => {
    if (err) throw err;

    console.log(stdout);
});

//List directories and then logs response - Windows
// exec.exec("dir", (err, stdout) => {
//     if (err) throw err;

//     console.log(stdout);
// });

//Gets Git version and then logs response
exec.exec("git --version", (err, stdout) => {
    if (err) throw err;
    console.log(stdout);
});

//Gets Node version and then logs response
exec.exec("node -v", (err, stdout) => {
    if (err) throw err;
    console.log(stdout);
});

//Gets npm version and then logs response
exec.exec("npm -v", (err, stdout) => {
    if (err) throw err;
    console.log(stdout);
    //process.exit();
});

//Spawn Examples - Spawn Multiple Child Process Executions
const spawn = require("child_process");
let cp = spawn.spawn("node", ["spawnExample"]);
let cpTwo = spawn.spawn("node", ["childEmitterOne"]);

//Listener for data event
cp.stdout.on("data", data => {
    console.log(`STDOUT Child Process: ${data.toString().trim()}`);
});

cpTwo.stdout.on("data", data => {
    console.log(`Event Emitter: ${data.toString().trim()}`);
});

//Listener for close event
cp.on("close", () => {
    console.log("Child Process One has ended.");
});

cpTwo.on("close", () => {
    console.log("Event Emitter has stopped");
    process.exit(); //Exit parent process
});

//Close the Child Process and Stop the Event Emitter - Stop logic must be held in the Child Process
setTimeout(() => {
    cp.stdin.write("STOP");
    cpTwo.stdin.write("STOP");
}, 4000);

//The order of child processes declaration does not guarantee the order or frequency of execution
