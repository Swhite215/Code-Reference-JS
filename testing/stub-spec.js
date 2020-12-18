const should = require("chai").should();
const Reservation = require("./reservation");
const reservations = require("./reservations");
const proxyquire = require("proxyquire");
const sinon = require("sinon");
const db = require("sqlite");

describe("Stub - Reservations Library", function() {
    //Stub to remove debugging
    const debugStub = function() {
        return sinon.stub();
    };

    let reservations;

    before(function() {
        reservations = proxyquire("./reservations", {
            debug: debugStub
        });
    });

    //Stub to simulate a custom DB response
    context("Create DB", function() {
        let dbStub;

        //Use before to set-up stub
        before(function() {
            dbStub = sinon.stub(db, "run").resolves({
                stmt: {
                    lastID: 1349
                }
            });

            reservations = proxyquire("./reservations", {
                debug: debugStub,
                sqlite: dbStub //Name of module not variable
            });
        });

        //Use after to clean-up stub
        after(function() {
            dbStub.restore();
        });

        it("should return the created reservation ID", function(done) {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username@example.com"
            });

            //Can promise chain given .validate() returns a promise
            reservations
                .create(reservation)
                .then(lastID => {
                    lastID.should.deep.equal(1349);
                    done();
                })
                .catch(error => done(error));
        });
    });
});
