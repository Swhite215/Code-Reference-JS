/*
//Singleton Class Solution
var Logger = require("./Logger");
var logger = new Logger().getInstance();
*/

//Exported Instance Solution
var logger = require("./Logger");

class Shopper {
    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }
}

module.exports = Shopper;
