//Sequential Execution with Async/Await - Make sure to RETURN promises!
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

/* jshint ignore:start */
const doStuffSequentially = async () => {
    try {
        console.log("starting...");
        await delay(5);
        console.log("waiting...");
        await delay(10);
        await writeFile("sample.txt", "Sample file...");
        beep();
        console.log("sample.txt was created...");
        await delay(10);
        await unlink("sample.txt");
        beep();
        console.log("sample.txt was removed...");
    } catch (err) {
        console.log(`Error: ${error.message}`);
    }
};
/* jshint ignore:end */

doStuffSequentially();

//Test of Await
const readTest = async () => {
    let files = await readdir(__dirname);
    console.log(files);
};

//readTest();
