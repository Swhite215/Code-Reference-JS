//Mocha - Describe, Run and Build Tests
//Chai - Assertion Engine, Checks Values
//TDD - Write Test -> Code
//Nock - Mocks http requests
//SUT - System Under Test
//Collaborators - Dependencies involved in our code

const expect = require("chai").expect;
const should = require("chai").should;
const assert = require("chai").assert;
const tools = require("./tools");
const nock = require("nock");

describe("Tools", () => {
    describe("printName()", () => {
        it("should print the last name first", () => {
            let result = tools.printName({ first: "Alex", last: "Banks" });
            expect(result).to.equal("Banks, Alex");
        });
    });

    describe("loadWiki()", () => {
        //Mocha will wait to finish test until done is invoked
        it("should load wikipedia page", done => {
            //Providing a callback to loadWiki that will deal with response body from request
            tools.loadWiki({ first: "Abraham", last: "Lincoln" }, html => {
                expect(html).to.be.ok;
                done();
            });
        });
    });

    describe("Mock loadWiki()", () => {
        //Hook - before will run this code to set up mocking pre-conditions
        before(() => {
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200, "Mock");
        });

        it("should load wikipedia page", done => {
            //Providing a callback to loadWiki that will deal with response body from request
            tools.loadWiki({ first: "Abraham", last: "Lincoln" }, html => {
                expect(html).to.equal("Mock");
                done();
            });
        });
    });
});
