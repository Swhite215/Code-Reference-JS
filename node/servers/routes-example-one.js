const express = require("express");
var cors = require("cors");

const app = express();

//Set up Cross Origin Resource Sharing
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

//Set up bodyParser for json
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set up swagger
var swagger = require("swagger-express");
app.use(swagger.init(app, config.get("swagger")));

//Set up handling of various routes
app.use("/", require("./routes"));

//Set server to listen on port
app.listen(process.env.PORT || 3001, () =>
    console.log("Server listening on port " + `${process.env.PORT || 3001}`)
);
