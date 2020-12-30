import express = require("express");
const mongoDbService = require("./services/mongodb");
import { Hero } from "./models/heroes";

const app: express.Application = express();

app.use(express.json());

app.get("/", async (req, res) => {
    res.send({"Test": "Spencer"});
});

app.post("/test", async (req, res) => {
    res.send(req.body);
});

app.post("/document", async (req, res, next) => {

    let hero: Hero = req.body;

    try {
        let newHero = await mongoDbService.HeroesDb.Insert(hero);

        if (newHero.insertedCount == 1) {
            res.json({"result": "success"});
        } else {
            res.status(503).json({"result": "failure"});
        }

    } catch(e) {
        e.httpStatusCode = 500;
        e.customMsg = `Error inserting document: ${hero}`;

        return next(e)
    }
});

mongoDbService.setupDb();

app.listen(3000, function() {
    console.log('App is listening on port 3000!');
});

