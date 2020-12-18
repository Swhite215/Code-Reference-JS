var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

//Subscribe so other objects listen to changes on the object
catsAndThings.subscribe(alex); //Alex is an observer listening for events on catsAndThings
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

//Event that others should be notified of
catsAndThings.sale(20);
insAndOuts.sale(50);
console.log(valleyMall.sales);
