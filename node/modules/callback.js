//Direct Style
const hideStringOne = str => {
    return str.replace(/[a-zA-z]/g, "X"); //Direct Style
};

var hidden = hideStringOne("Hello World");

console.log(hidden);

//Continuation Passing Style
const hideStringTwo = (str, callback) => {
    //Defer function execution to next Event Loop iteration
    process.nextTick(() => {
        callback(str.replace(/[a-zA-z]/g, "X"));
    });
};

hideStringTwo("Hello World", result => {
    console.log(result);
});

console.log("End");

//Delay Example
delay = (seconds, callback) => {
    setTimeout(callback, seconds * 1000);
};

console.log("Starting Delays");

//Delay Example - Sequential Execution of Callbacks
//Anti-Pattern - Callback Hell or Pyramid Doom
delay(2, () => {
    console.log("Two Seconds");
    delay(1, () => {
        console.log("Three Seconds");
        delay(1, () => {
            console.log("Four Seconds");
        });
    });
});

//Direct Style = Synchronous, Functions return values
//Continuation Passing Style = Functions pass control on to a continuation
//Callback - should be asynchronous
