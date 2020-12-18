const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/routes");
const app = express();

//Middlware - Body Parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Middleware - Serving Static Files - Forwarded to File System
app.use(express.static(path.join(__dirname, "public")));

//Middleware - Applies to all requests
app.use((req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(next);

    //Call next to allow the request to travel onto the next middleware
    next();
});

//Routing - Example Path
app.use('/example', (req, res, next) => {
    res.send(`<h1>Welcome to Example Page</h1>`);
});

//Routing - Example Routes File
app.use('/api', apiRoutes);

//Routing - Catch All Error Path
app.post('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

//TODO: DELETE NODE_MODULES ON DESKTOP
