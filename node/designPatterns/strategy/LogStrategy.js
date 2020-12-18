const path = require("path");
const { appendFile } = require("fs");

class LogStrategy {
    static noDate(timestamp, message) {
        console.log(message);
    }

    static toFile(timestamp, message) {
        var fileName = path.join(__dirname, "logs.txt");
        appendFile(fileName, `${timestamp} - ${message}\n`, err => {
            if (err) {
                console.log("Error writing file");
                console.log(err);
            }
        });
    }

    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`);
    }

    static none(timestamp, message) {}
}

module.exports = LogStrategy;
