//Parallel Executions - Resolving multiple executions at once
const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const readdir = promisify(fs.readdir);

const beep = () => process.stdout.write("\x07");
const delay = seconds => {
    console.log(`Delaying for ${seconds} seconds...`);
    return new Promise((resolves, rejects) => {
        setTimeout(resolves, seconds * 1000);
    });
};

//Promise.All Parallel Example
Promise.all([
    unlink("sample1.txt"),
    unlink("sample2.txt"),
    delay(3),
    unlink("sample3.txt")
])
    .then(result => {
        console.log("Three files created");
    })
    .catch(err => {
        console.log(`Error: ${err.message}`);
    });
