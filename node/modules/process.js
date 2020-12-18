//Process Object
console.log(process);

//Argv - Command line arguments passed when the Node.js process was launched
console.log(process.argv);

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return index === -1 ? null : process.argv[index + 1];
}

var greeting = grab("--greeting");
var user = grab("--user");

if (!user || !greeting) {
    console.log("No arguments passed");
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}

//Stdin and Stdout
var questions = [
    "What is your name?",
    "What is your favorite hobby?",
    "What is your preferred programming language?"
];

var answers = [];

const askQuestion = i => {
    process.stdout.write(`\n ${questions[i]}`);

    process.stdout.write(`\n >> `);
};

//Stdin.on - Data event is when user enters information
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        askQuestion(answers.length);
    } else {
        process.exit(); //Exits the process
    }
});

//Process.on - Exit event occurs when .exit() is called on the process object
process.on("exit", () => {
    process.stdout.write(`\n`);

    process.stdout.write(
        `Go ${answers[1]} ${answers[0]}! You can finish writing ${
            answers[2]
        } later.`
    );

    process.stdout.write(`\n`);
});

askQuestion(0);
