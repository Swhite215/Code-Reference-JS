const should = require("chai").should();

//Issues with Internet Explorer
describe("Chai Should BDD Library", function() {
    it("allows checking for a value type", function() {
        let string = "";
        let number = 4;
        let array = [];
        let object = {};

        string.should.be.a("string");
        number.should.be.a("number");
        array.should.be.a("array");
        object.should.be.a("object");
    });

    it("allows negation of assertion", function() {
        let string = "";
        let number = 4;
        let array = [];
        let object = {};

        object.should.not.be.a("string");
        string.should.not.be.a("number");
        number.should.not.be.a("array");
        array.should.not.be.a("object");
    });

    it("allows checking of strict equality", function() {
        let string = "4";
        let stringTwo = "4";

        string.should.equal(stringTwo);
    });

    it("allows checking of deep equality", function() {
        let obj1 = { name: "Test", id: 1 };
        let obj2 = { name: "Test", id: 1 };

        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];

        obj1.should.deep.equal(obj2);
        arr1.should.deep.equal(arr2);
    });

    it("allows checking of order", function() {
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];

        arr1.should.have.ordered.members(arr2);
    });

    it("allows checking of keys", function() {
        let obj1 = { name: "Test", id: 1 };

        obj1.should.have.any.keys("name");
        obj1.should.have.all.keys("name", "id");
    });

    it("allows checking for inclusion", function() {
        let obj1 = { name: "Test", id: 1 };
        let arr1 = [1, 2, 3, 4];
        let string = "foobar";

        obj1.should.include({ name: "Test" });
        arr1.should.include(3);
        string.should.include("foo");
    });

    it("allows checking for truthy or true", function() {
        let obj1 = { name: "Test", id: 1 };
        let bool = true;

        obj1.should.be.ok;
        bool.should.be.true;
    });

    it("allows checking for falsy or false", function() {
        let string = "";
        let bool = false;

        string.should.not.be.ok;
        bool.should.not.be.true;
    });

    it("allows checking for empty", function() {
        let string = "";
        let obj1 = {};

        string.should.be.empty;
        obj1.should.be.empty;
    });

    it("allows checking for values above", function() {
        let num1 = 5;
        let num2 = 10;

        num2.should.be.above(num1);
    });

    it("allows checking for values below", function() {
        let num1 = 5;
        let num2 = 10;

        num1.should.be.below(num2);
    });
});
