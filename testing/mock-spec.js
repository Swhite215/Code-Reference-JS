const should = require("chai").should();
const chai = require("chai");
const Reservation = require("./reservation");
const reservations = require("./reservations");
const proxyquire = require("proxyquire");
const sinon = require("sinon");
const db = require("sqlite");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe("Mock - Reservations Library", function() {
    context("Save", function() {
        let dbMock;
        const debugStub = function() {
            return sinon.stub();
        };

        let reservations;

        before(function() {
            dbMock = sinon.mock(db);
        });

        after(function() {
            dbMock.restore();
        });

        it("shoud only call database once", function() {
            dbMock.expects("run").once();

            reservations = proxyquire("./reservations", {
                debug: debugStub,
                sqlite: dbMock
            });

            const reservation = {
                datetime: "2017-06-10T06:02:00.000Z",
                party: 4,
                name: "Family",
                email: "username@example.com",
                message: undefined,
                phone: undefined
            };

            reservations.save(reservation);

            dbMock.verify();
        });
    });
});
