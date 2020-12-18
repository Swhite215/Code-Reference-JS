//Promises - Wait for an asynchronous operation to complete and then resolve the promise
var delay = seconds =>
    new Promise((resolves, rejects) => {
        //Resolves - Invoke for successful resolution
        setTimeout(() => {
            resolves("The long delay has ended."); //Passing information via resolves
        }, seconds * 1000);

        //Rejects - Invoke for unsuccessful resolution
        if (seconds > 3) {
            rejects(new Error(`${seconds} is too long...`));
        }
        //throw new Error("There was an error.");
    });

delay(4)
    .then(message => {
        console.log(message);
    })
    .then(() => 42)
    .then(number => {
        console.log(`Additional messages: ${number}`);
    })
    .catch(err => {
        console.log(`Error: ${err.message}`);
    });

console.log("End First Tick");
