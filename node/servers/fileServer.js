const http = require("http");
const fs = require("fs");
const path = require("path");

console.log(__dirname); //Current directory for this folder

const server = http
    .createServer((req, res) => {
        console.log(`${req.method} request for ${req.url}`);

        if (req.url === "/") {
            fs.readFile("./publicExample/index.html", "UTF-8", (err, html) => {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(html);
            });
        } else if (req.url.match(/.css$/)) {
            const cssPath = path.join(__dirname, "publicExample", req.url); //Path to CSS
            const fileStream = fs.createReadStream(cssPath, "UTF-8"); //Created readable stream for content

            res.writeHead(200, { "Content-Type": "text/css" }); //Header for text/css content type

            fileStream.pipe(res); //Streams contents of file to resposne
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 File Not Found");
        }
    })
    .listen(3000);
