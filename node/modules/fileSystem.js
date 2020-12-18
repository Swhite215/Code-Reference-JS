//FS Module
//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//Two Forms - Asynchronous or Synchronous - Always use Asynchronous for non-blocking

//Requiring File System
const fs = require("fs");
const path = require("path");

console.log(fs); // The FS module
console.log(fs.readdirSync("./")); // Synchronous - Returns all the files and folders in the chosen folder
console.log(
    // Asynchronous - returns all the files and folders in the chosen folder
    fs.readdir("./", (err, files) => {
        if (err) console.log("Error", err);
        else console.log("Result", files);
    })
);

//Reading A File
fs.readFile("./timers.js", "UTF-8", (err, data) => {
    if (err) console.log("Error", err);
    console.log(data);
});

//Reading All Files in Current Directory
fs.readdir("./", (err, files) => {
    if (err) console.log("Error", err);
    files.forEach(fileName => {
        let file = path.join(__dirname, fileName);

        fs.readFile(file, "UTF-8", (err, data) => {
            if (err) console.log("Error", err);
            console.log(data);
        });
    });
});

//Writing a File
let markdown = `
Sample Markdown Title
=====================

Sample Subtitle
---------------

*Ipsum ed delore
*Ventao vin tisto
`;

fs.writeFile("sample.txt", markdown.trim(), err => {
    console.log("File Created");
});

//Appending to a File
let extraMarkdown = `
Lorom ipsum dolor
`;

fs.appendFile("sample.txt", extraMarkdown, err => {
    console.log("File Updated");
});

//Making a directory
if (fs.existsSync("testDirectory")) {
    console.log("Directory already exists");
} else {
    fs.mkdir("testDirectory", err => {
        console.log("Directory Created");
    });
}

//Renaming a File or Directory
fs.rename("sample.txt", "renamed.txt", err => {
    if (err) console.log(err);
});

//Removing a File or Directory
setTimeout(() => {
    try {
        fs.unlinkSync("renamed.txt");
        fs.rmdirSync("./testDirectory"); //Folder must be empty
    } catch (e) {
        console.log(e);
    }
}, 3000);
