//Module Example
//Node wraps each file in a IFFE function declaration, passing exports, require, module, _filename, and _dirname

//Arguments passed to IFFE
console.log(__filename); //Complete path to the current file
console.log(__dirname); //Path to directory that contains this module
console.log(module); //Representation of the current file
console.log(require); //Function used for grabbing exported modules for use in a file

function log(message) {
    console.log(message);
}

//How to export something from a module
module.exports.log = log; //Method on exports object, access with .log
module.exports = log; //Method as exports object, access by calling instance
exports.log = log; //Method as exports object, access by calling instance
