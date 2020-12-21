//Express File Server
const express = require("express"); //Grabs Express Framework
const app = express(); //Creates instance of server
const data = require("./publicExample/colors.json");
const cors = require("cors");

//Middleware - Function with three arguments
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next(); //Must invoke to continue handling request
});

app.use(express.static("./publicExample")); //Handles where static files are being served from

app.use(cors); //Adds Cross Origin Resource Sharing

//Routes
app.get("/api/colors", (req, res) => {
    if (req.query.color) {
        let selectedColor = data.colors.filter(color => {
            console.log(`Current Color Object: ${color}`);
            console.log(`Current Color Name:  ${color.color}`);
            console.log(`Queried Color: ${req.query.color}`);
            return color.color === req.query.color.toLowerCase().trim();
        });

        res.json(selectedColor);
    } else {
        res.json(data);
    }
});

//Set Server to Listen on Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on PORT: ${port}`);
});
