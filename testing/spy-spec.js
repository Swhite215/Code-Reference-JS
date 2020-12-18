const should = require("chai").should();
const chai = require("chai");
const Reservation = require("./reservation");
const reservations = require("./reservations");
const proxyquire = require("proxyquire");
const sinon = require("sinon");
const db = require("sqlite");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe("Spy - Reservations Library", function() {
    context("Create DB", function() {
        let validateSpy;
        let dbStub;

        const debugStub = function() {
            return sinon.stub();
        };

        let reservations;
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

        it("should call the validator with a transformed reservation once", function(done) {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username@example.com"
            });

            //Set a spy on a specific method
            validateSpy = sinon.spy(reservations, "validate");

            reservations
                .create(reservation)
                .then(() => {
                    validateSpy.should.have.been.calledOnce.and.been.calledWith(
                        reservation
                    );

                    //Clean up the spy
                    validateSpy.restore();
                    done();
                })
                .catch(err => done(err));
        });
    });
});
