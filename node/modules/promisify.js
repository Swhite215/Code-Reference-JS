//Function - If pass error as first callback argument, and any additional values as second, can Promisify.
const { promisify } = require("util");
const fs = require("fs");

var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} is too long...`));
    } else {
        setTimeout(() => {
            callback(null, `the ${seconds} second delay is over.`);
        }, seconds);
    }
};

//Promisifying a method
var promiseDelay = promisify(delay);
promiseDelay(2)
    .then(console.log)
    .catch(err => {
        console.log(`Error: ${error.message}`);
    });

//Promisifying FS
const writeFile = promisify(fs.writeFile);
writeFile("sample.txt", "This is a sample")
    .then(() => {
        console.log("File successfully created");
    })
    .catch(err => {
        console.log("Error creating file");
    });
