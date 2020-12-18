//HTTPS Module
//HTTPS is the HTTP protocol over TLS/SSL
const https = require("https");
const fs = require("fs");

//Options Object
let options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Iron_Man",
    method: "GET"
};

//Request Example
let req = https.request(options, res => {
    let response = "";

    console.log("Response from server started.");
    console.log(`Server Status: ${res.statusCode}`);
    console.log(`Response Headers: ${res.headers}`);

    res.setEncoding("UTF-8");

    res.once("data", chunk => {
        console.log(chunk);
    });

    res.on("data", chunk => {
        console.log(`--chunk-- ${chunk.length}`);
        response += chunk;
    });

    res.on("end", () => {
        fs.writeFile("./Iron_Man.html", response, err => {
            if (err) {
                console.log(err);
            }
            console.log("File Downloaded");
        });
    });
});

//Request Listening for Instance of An Error
req.on("error", err => {
    console.log(`Problem with Request: ${err}`);
});

req.end();
