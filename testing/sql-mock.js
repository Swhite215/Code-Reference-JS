// Chai
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const rewire = require("rewire");

const sqlService = require("../services/sql-services");
const sinon = require("sinon");

// Mocking a DB Service Method
describe("SQL Service Unit Tests", function () {
  describe("sqlMethod()", function () {
    let mockObj;
    let successString = "success string";
    let errorObject = {
      name: "server error",
      message: "error message",
    };

    afterEach(function () {
      mockObj.restore();
    });

    let inputOne = "0xb76814C18FF8744CCc15B879e78b61C50e33175F";
    let inputTwo = "1794f6d4-aff3-4566-ab7b-2f33060dd868";
    let inputThree = "0001";

    it("should do something", async function () {
      mockObj = sinon.stub(sqlService, "insertIdentity").returns(successString);
      let retVal = await sqlService.insertIdentity(inputOne, inputTwo, inputThree);
      expect(retVal).to.equal(successString);
    });

    it("should return an error if record could not be inserted", async function () {
      mockObj = sinon.stub(sqlService, "insertIdentity").throws(errorObject); // Subsequent ITs just change stub behavior

      try {
        let retVal = await sqlService.insertIdentity(publicKey, personID, obfuscatedID);
      } catch (e) {
        expect(e).to.deep.equal(errorObject);
      }
    });
  });
});
