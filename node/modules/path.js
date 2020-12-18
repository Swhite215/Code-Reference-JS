//Path Module
//The path module provides utilities for working with file and directory paths.

//Requiring Path
const path = require("path");

var pathObject = path.parse(__filename);

console.log(pathObject); //Object representing this modules path
console.log(pathObject.root); //Root directory
console.log(pathObject.dir); //Path to current directory
console.log(pathObject.base); //Current file
console.log(pathObject.ext); //Current file extension
console.log(pathObject.name); //Current file name

console.log(path); //Logging the Path Module
