const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;
chai.use(chaiHttp);
const { v4: uuidv4 } = require("uuid");

//const rewire = require("rewire");
const sinon = require("sinon");

const app = require("../public-server");
const sqlService = require("../services/sql-services");

// Mocking a DB Service Method Used in An Endpoint
describe("DB Endpoint Tests", function () {
  describe("POST /create", function () {
    let mockInsert;

    let inputOne = "0xb76814C18FF8744CCc15B879e78b61C50e33175F";
    let inputTwo = "1794f6d4-aff3-4566-ab7b-2f33060dd868";
    let inputThree = "0001";

    let result = {
      message: "Success",
    };

    beforeEach(function () {
      mockInsert = sinon.fake.resolves(insertIdentityResult);
      sinon.replace(sqlService, "insertIdentity", mockInsert);
    });

    afterEach(function () {
      sinon.restore();
    });

    it("should create a new user", function (done) {
      chai
        .request(app)
        .post(`/create`)
        .send({
          inputOne: inputOne,
          inputTwo: inputTwo,
          inputThree: inputThree,
        })
        .end((err, res) => {
          expect(sqlService.insertIdentity.callCount).to.equal(1);
          expect(sqlService.insertIdentity.getCall(0).args[0]).to.equal(publicKey, personID, obfuscatedID);

          res.should.have.status(200);
          expect(res.body).to.deep.equal(result);
          done();
        });
    });

    it("should return a 400 error if something happened", function (done) {
      chai
        .request(app)
        .post(`/create`)
        .send({
          inputOne: inputOne,
          inputTwo: inputTwo,
          inputThree: inputThree,
        })
        .end((err, res) => {
          res.should.have.status(400);
          expect(res.error.text).to.deep.equal("error message");
          done();
        });
    });
  });
});
