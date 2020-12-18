//Sequential Execution with Promises
const fs = require("fs");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

const beep = () => process.stdout.write("\x07");
const delay = seconds => {
    return new Promise((resolves, rejects) => {
        setTimeout(resolves, seconds * 1000);
    });
};

const doStuffSequentially = () =>
    Promise.resolve()
        .then(() => console.log("starting..."))
        .then(() => delay(10))
        .then(() => "waiting")
        .then(console.log)
        .then(delay(2))
        .then(() => writeFile("sample.txt", "Sample file"))
        .then(beep())
        .then(() => "sample.txt was created...")
        .then(console.log)
        .then(() => delay(3))
        .then(() => unlink("sample.txt"))
        .then(beep())
        .then(() => "sample.txt was removed...")
        .then(console.log)
        .catch(console.error);

doStuffSequentially();
