//OS Module
//The os module provides a number of operating system-related utility methods.

//Requiring OS
const os = require("os");

console.log(os); // The OS Module
console.log(`Total Memory is: ${os.totalmem()}`); // Returns total memory
console.log(`Free Memory is: ${os.freemem()}`); // Returns free memory
console.log(os.homedir()); // Home directory
