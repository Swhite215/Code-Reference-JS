//Global Timer Module
//The timer module exposes a global API for scheduling functions to be called at some future period of time

//Set Timeout
let waitTime = 3000;

console.log(`Wait for it...`);

setTimeout(() => {
    writeWaitingPercent(100);
    process.stdout.write("\nDone");
    clearInterval(myInterval);
}, waitTime);

//Set Interval
let currentTime = 0;
let waitInterval = 100;

let myInterval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

let percentWaited = 0;

const writeWaitingPercent = p => {
    process.stdout.clearLine(); //Clears last line in the terminal
    process.stdout.cursorTo(0); //Returns cursor to first line
    process.stdout.write(`Waiting ... ${p}%`);
};
