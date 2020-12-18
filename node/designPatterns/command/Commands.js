const { writeFile, unlink } = require("fs");
const path = require("path");

class ExitCommand {
    get name() {
        return "exit";
    }

    //Each command needs an execute method that the conductor calls
    execute() {
        process.exit(0);
    }
}

class CreateCommand {
    constructor(fileName, text) {
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `create ${this.fileName}`;
    }

    execute() {
        writeFile(this.fullPath, this.body, () => {
            return;
        });
    }

    undo() {
        unlink(this.fullPath, () => {
            return;
        });
    }
}

class DeleteCommand {
    constructor(fileName) {
        this.fileName = fileName;
        this.fullPath = path.join(__dirname, fileName);
    }
    execute() {
        unlink(this.fullPath, err => {
            if (err) throw err;
            console.log(`${this.fileName} was deleted`);
        });
    }
}

module.exports = { ExitCommand, CreateCommand, DeleteCommand };
