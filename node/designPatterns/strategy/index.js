var logger = require("./Logger");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");

//Call Change Strategy
logger.changeStrategy("toFile");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");
