//Readline Module
//The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let realPerson = {
    name: "",
    sayings: []
};

//Presents question and provides callback function for input from question
rl.question("What is your name? ", answer => {
    realPerson.name = answer;

    //Sets the prompt that will be written when rl.prompt() is called
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();

    //Line event is emitted whenever the input strewam receives an end of line input (Enter or Return)
    rl.on("line", saying => {
        if (saying.toLowerCase().trim() === "exit") {
            rl.close();
        } else {
            realPerson.sayings.push(saying.trim());

            rl.setPrompt(
                `What else would ${realPerson.name} say? ('exit' to leave)`
            );
            rl.prompt();
        }
    });

    //rl.close(); //Closes the stream
});

//Listen for close event to be emitted and provides callback function
rl.on("close", () => {
    console.log(
        `${realPerson.name} is a person that says ${realPerson.sayings}`
    );

    process.exit(); //End the entire process
});
