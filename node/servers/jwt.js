const express = require("express");
const jwt = require("jsonwebtoken");

//Initialize Express App
const app = express();

//Format of Token
//Authorization: Bearer <access_token>

//Secret Keey - Should be kept in separate file
const secretKey = "Secret";

//Middleware Functions
function verifyToken(req, res, next) {
    console.log(req.headers);

    //Get AUTH Header Value
    const bearerHeader = req.headers["authorization"];

    //Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
        //Split at Space
        const bearerToken = bearerHeader.split(" ")[1];

        //Set the token
        req.token = bearerToken;

        //Call Next Middleware
        next();
    } else {
        //Forbidden
        res.sendStatus(403);
    }
}

//GET Request
app.get("/", (req, res) => {
    //console.log(req);
    res.send("Hello World");
});

//POST Protected Request - verifyToken middleware
app.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, decoded) => {
        if (err) {
            res.sendStatus(403);
        } else {
            console.log(decoded);

            res.json({
                message: "POST Created",
                decoded
            });
        }
    });
});

//POST Login Request
app.post("/api/login", (req, res) => {
    //Username and Password -> Database -> Logged In User -> Pass User to JWT Sign
    const user = {
        id: 1,
        username: "Test",
        email: "test.com"
    };

    //Payload, Secret Key, Callback Function
    jwt.sign({ user }, secretKey, { expiresIn: "24h" }, (err, token) => {
        //Send Client Token, Save to Local Storage, Use in Requests with Authorization: Bearer <access_token>
        res.json({
            token
        });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});
