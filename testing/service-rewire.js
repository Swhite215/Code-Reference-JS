// Chai
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
const rewire = require("rewire");

const someService = rewire("../services/some-services"); // Use rewire to change behavior of methods called within other methods
const sinon = require("sinon");

// Dealing with a method that uses another method from same file
describe("Issuer Service Unit Tests", function () {
  describe("issueCredential()", function () {
    let issueStringCredential, origIssueStringCredential; // method called in method being tested*
    let mockCredential = {
      name: "credential",
    };

    beforeEach(function () {
      issueStringCredential = sinon.stub().returns(mockCredential);
      origIssueStringCredential = issuerService.__get__("issueStringCredential");
      issuerService.__set__("issueStringCredential", issueStringCredential);
      this.clock = sinon.useFakeTimers(); // Makes date = 1970-01-01T00:00:00.000Z
    });

    afterEach(function () {
      issuerService.__set__("issueStringCredential", origIssueStringCredential);
    });

    it("should return a new credential", async function () {
      let retVal = await issuerService.issueIdentityCredential(publicKey, personID); // Confirming this method, with dependency, is working correctly

      let data = {
        id: "PUBLIC KEY",
        identity: "PERSON ID",
        date: new Date(),
      };

      expect(issueStringCredential.callCount).to.equal(1);
      expect(issueStringCredential.getCall(0).args[0]).to.equal(schemaDID);
      expect(issueStringCredential.getCall(0).args[1]).to.deep.equal(data);
      expect(retVal).to.deep.equal(mockCredential);
    });
  });
});
