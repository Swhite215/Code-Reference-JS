const assert = require("chai").assert;

describe("Chai Assertion Library", function() {
    it("contains basic assert()", function() {
        assert(3 !== 5);
    });

    it("contains .isOk()", function() {
        assert.isOk("This string is truthy.");
    });

    it("contains .isNotOk()", function() {
        assert.isNotOk(0);
    });

    it("contains .equal()", function() {
        assert.equal(10, "10");
    });

    it("contains .notEqual()", function() {
        assert.notEqual(10, 100);
    });

    it("contains .strictEqual()", function() {
        assert.strictEqual(1, 1);
    });

    it("contains .notStrictEqual()", function() {
        assert.notStrictEqual(1, "1");
    });

    it("contains .deepEqual()", function() {
        assert.deepEqual({ name: "Test" }, { name: "Test" });
        assert.deepEqual([1, 2, 3], [1, 2, 3]);
    });

    it("contains .notDeepEqual()", function() {
        assert.notDeepEqual({ name: "Test" }, { id: 1 });
        assert.notDeepEqual([1, 2, 3], ["1", "2", "3"]);
    });

    it("contains .isAbove()", function() {
        assert.isAbove(10, 1);
    });

    it("contains .isAtLeast()", function() {
        assert.isAtLeast(5, 4);
    });

    it("contains .isBelow()", function() {
        assert.isBelow(100, 10000);
    });

    it("contains .isAtMost()", function() {
        assert.isAtMost(200, 2000);
    });

    it("contains .isTrue()", function() {
        assert.isTrue(true);
    });

    it("contains .isNotTrue()", function() {
        assert.isNotTrue(false);
    });

    it("contains .isFalse()", function() {
        assert.isFalse(false);
    });

    it("contains .isNotFalse()", function() {
        assert.isNotFalse(true);
    });

    it("contains .isNull()", function() {
        assert.isNull(null);
    });

    it("contains .isNotNull()", function() {
        assert.isNotNull(1);
    });

    it("contains .isNaN()", function() {
        assert.isNaN(NaN);
    });

    it("contains .isNotNaN()", function() {
        assert.isNotNaN(1);
    });

    it("contains .exists()", function() {
        assert.exists(1);
    });

    it("contains .notExists()", function() {
        assert.notExists(undefined);
    });

    it("contains .isUndefined()", function() {
        assert.isUndefined(undefined);
    });

    it("contains .isDefined()", function() {
        assert.isDefined(1);
    });

    it("contains .isFunction()", function() {
        let fn = () => console.log(hello);
        assert.isFunction(fn);
    });

    it("contains .isNotFunction()", function() {
        assert.isNotFunction(1);
    });

    it("contains .isObject()", function() {
        assert.isObject({});
    });

    it("contains .isNotObject()", function() {
        assert.isNotObject(1);
    });

    it("contains .isArray()", function() {
        assert.isArray([]);
    });

    it("contains .isNotArray()", function() {
        assert.isNotArray(1);
    });

    it("contains .isString()", function() {
        assert.isString("Test");
    });

    it("contains .isNotString()", function() {
        assert.isNotString(1);
    });

    it("contains .isNumber()", function() {
        assert.isNumber(1);
    });

    it("contains .isNotNumber()", function() {
        assert.isNotNumber("String");
    });

    it("contains .isFininte()", function() {
        assert.isFinite(1000);
    });

    it("contains .isBoolean()", function() {
        assert.isBoolean(true);
        assert.isBoolean(false);
    });

    it("contains .isNotBoolean()", function() {
        assert.isNotBoolean(1);
    });

    it("contains .typeOf()", function() {
        assert.typeOf(1, "number");
        assert.typeOf("Test", "string");
        assert.typeOf(true, "boolean");
        assert.typeOf([], "array");
        assert.typeOf({}, "object");
        assert.typeOf(/test/, "regexp");
        assert.typeOf(null, "null");
        assert.typeOf(undefined, "undefined");
    });

    it("contains .notTypeOf()", function() {
        assert.notTypeOf([], "number");
    });

    it("contains .instanceOf()", function() {
        class Dog {
            constructor(name, breed) {
                this.name = name;
                this.breed = breed;
            }

            bark() {
                console.log("Bark!");
            }
        }

        let terrier = new Dog("Jackson", "terrier");

        assert.instanceOf(terrier, Dog);
    });

    it("contains .notInstanceOf()", function() {
        class Dog {
            constructor(name, breed) {
                this.name = name;
                this.breed = breed;
            }

            bark() {
                console.log("Bark!");
            }
        }

        let terrier = {
            name: "Jackson",
            breed: "terrier",
            bark: function() {
                console.log("Bark!");
            }
        };

        assert.notInstanceOf(terrier, Dog);
    });

    it("contains .include()", function() {
        assert.include("The dog is a rotweiler.", "dog");
        assert.include([1, 2, 3, 4, 5], 2);
        assert.include({ name: "Test", id: 1 }, { id: 1 });
    });

    it("contains .notInclude()", function() {
        assert.notInclude("The dog is a rotweiler.", "terrier");
        assert.notInclude([1, 2, 3, 4, 5], 10);
        assert.notInclude({ name: "Test", id: 1 }, { candy: "snicker" });
    });

    it("contains .match()", function() {
        assert.match("abcdefg", /abc/);
    });

    it("contains .notMatch()", function() {
        assert.notMatch("abcdefg", /hij/);
    });

    it("contains .property()", function() {
        assert.property({ name: "Test" }, "name");
    });

    it("contains .notProperty()", function() {
        assert.notProperty({ name: "Test" }, "id");
    });

    it("contains .containsAllKeys()", function() {
        assert.containsAllKeys({ name: "Test", id: 1 }, ["name", "id"]);
    });
});
