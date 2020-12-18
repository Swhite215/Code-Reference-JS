var router = require("express").Router();

// Default
router.get("/", (req, res, next) => {
    if (process.env.NODE_ENV.toLowerCase() !== "development")
        res.send("Server");
    else res.redirect("/swagger");
});

//Example Routes One
router.use("/api/exampleOne", require("./controllers/exampleOne/setOne"));

//Example Routes Two
router.use("/api/exampleTwo", require("./controllers/exampleOne/setTwo"));

router.get("/*", (req, res) => {
    res.redirect("/");
});

module.exports = router;
