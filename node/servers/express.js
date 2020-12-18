//Express Frameowrk
//Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications.
//It is the de facto standard server framework for node.js. Frameworks built on Express.

//Requiring Express
const express = require("express");
const app = express();

//Middleware
app.use(express.json()); //Allows the use of middleware in the request pipeline

//REST - Representation State Transfer, Roy Fielding, METHODS below
const examples = [
    { id: 1, name: "Example Data One" },
    { id: 2, name: "Example Data Two" },
    { id: 3, name: "Example Data Three" }
];

//GET REQUESTS
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/getExample", (req, res) => {
    res.send([1, 2, 3, 4]);
});

app.get("/api/getExample/:id", (req, res) => {
    //res.send(req.params.month) Returning specific param value
    //res.send(req.params); // Returning entire param objects

    let requestedExample = examples.find(
        example => example.id === parseInt(req.params.id)
    );
    if (!requestedExample) {
        res.status(404).send("The example was not found");
    }

    res.send(requestedExample);
});

app.get("/api/getExample/:month/:year", (req, res) => {
    //Query String = ?key=value&key2=value2&key3=value3
    res.send(req.query); // Returning entire query object
});

//POST REQUESTS
app.post("/api/postExample", (req, res) => {
    const newExample = {
        id: examples.length + 1, //Not an effective method for generating unique Ids
        name: req.body.name
    };

    examples.push(newExample);

    res.send(newExample);
});

//PUT REQUESTS
app.put("/api/putExample", (req, res) => {});

//DELETE REQUESTS
app.delete("/api/deleteExample", (req, res) => {});

// PORT - Environment Variable
const port = process.env.PORT || 3000; //Use environment variable or port 3000

//Listen on a Port
app.listen(port, () => {
    console.log(`Listening on port  + ${port}`);
});

console.log(process); // Process Global Variable
console.log(express); // Express Function
console.log(app); //Server is an EventEmitter
