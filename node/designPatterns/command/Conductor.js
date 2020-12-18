class Conductor {
    constructor() {
        this.history = [];
        this.undone = [];
    }

    //Method to execute the command
    run(command) {
        console.log(`Executiong command: ${command.name}`);
        command.execute();
        this.history.push(command);
    }

    //Method to print history of commands executed
    printHistory() {
        this.history.forEach(command => {
            console.log(command.name);
        });
    }

    //Method to UNDO a command
    undo() {
        var command = this.history.pop();
        console.log(`undo ${command.name}`);
        command.undo();
        this.undone.push(command);
    }

    //Method to REDO a command
    redo() {
        var command = this.undone.pop();
        console.log(`redo ${command.name}`);
        command.execute();
        this.history.push(command);
    }
}

//Singleton
module.exports = new Conductor();
