var scout_protoype = require("./scout_protoype");

var alex = scout_protoype.clone();
alex.name = "Alex Banks";
alex.addItemToList("slingshot");

var eve = scout_protoype.clone();
eve.name = "Eve Porcello";
eve.addItemToList("reading light");

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
