const expect = require("chai").expect;

describe("Chai Expect Library", function() {
    it("allows checking for a value type.", function() {
        let string = "";
        let number = 4;
        let array = [];
        let object = {};

        expect(string).to.be.a("string");
        expect(number).to.be.a("number");
        expect(array).to.be.a("array");
        expect(object).to.be.a("object");
    });

    it("allows negation of assertion", function() {
        let string = "";
        let number = 4;
        let array = [];
        let object = {};

        expect(object).to.not.be.a("string");
        expect(string).to.not.be.a("number");
        expect(number).to.not.be.a("array");
        expect(array).to.not.be.a("object");
    });

    it("allows checking of strict equality", function() {
        let string = "4";
        let stringTwo = "4";

        expect(string).to.equal(stringTwo);
    });

    it("allows checking of deep equality", function() {
        let obj1 = { name: "Test", id: 1 };
        let obj2 = { name: "Test", id: 1 };

        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];

        expect(obj1).to.deep.equal(obj2);
        expect(arr1).to.deep.equal(arr2);
    });

    it("allows checking of order", function() {
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];

        expect(arr1).to.have.ordered.members(arr2);
    });

    it("allows checking of keys", function() {
        let obj1 = { name: "Test", id: 1 };

        expect(obj1).to.have.any.keys("name");
        expect(obj1).to.have.all.keys("name", "id");
    });

    it("allows checking for inclusion", function() {
        let obj1 = { name: "Test", id: 1 };
        let arr1 = [1, 2, 3, 4];
        let string = "foobar";

        expect(obj1).to.include({ name: "Test" });
        expect(arr1).to.include(3);
        expect(string).to.include("foo");
    });

    it("allows checking for truthy or true", function() {
        let obj1 = { name: "Test", id: 1 };
        let bool = true;

        expect(obj1).to.be.ok;
        expect(bool).to.be.true;
    });

    it("allows checking for falsy or false", function() {
        let string = "";
        let bool = false;

        expect(string).to.not.be.ok;
        expect(bool).to.not.be.true;
    });

    it("allows checking for empty", function() {
        let string = "";
        let obj1 = {};

        expect(string).to.be.empty;
        expect(obj1).to.be.empty;
    });

    it("allows checking for values above", function() {
        let num1 = 5;
        let num2 = 10;

        expect(num2).to.be.above(num1);
    });

    it("allows checking for values below", function() {
        let num1 = 5;
        let num2 = 10;

        expect(num1).to.be.below(num2);
    });
});
