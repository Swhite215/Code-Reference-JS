var Shopper = require("./Shopper");

//Scout - instance of the Shopper Class with pre-determined items
var scout = new Shopper();
scout.addItemToList("camping knife");
scout.addItemToList("tent");
scout.addItemToList("backpack");
scout.addItemToList("map");

module.exports = scout;
