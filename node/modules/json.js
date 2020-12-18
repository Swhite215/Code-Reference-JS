const http = require("http");
const data = require("./publicExample/colors.json");
const querystring = require("querystring");

const server = http
    .createServer((req, res) => {
        let queryString = querystring.parse(req.url.split("?")[1]);
        console.log(queryString.color);

        if (queryString.color) {
            let selectedColor = data.colors.filter(color => {
                console.log(`Current Color Object: ${color}`);
                console.log(`Current Color Name:  ${color.color}`);
                console.log(`Queried Color: ${queryString.color}`);
                return color.color === queryString.color.toLowerCase().trim();
            });

            console.log(`This is the selected color object: ${selectedColor}`);
            res.writeHead(200, { "Content-Type": "text/json" });
            res.end(JSON.stringify(selectedColor));
        } else {
            res.writeHead(200, { "Content-Type": "text/json" });
            res.end(JSON.stringify(data));
        }
    })
    .listen(3000);

console.log(data);
