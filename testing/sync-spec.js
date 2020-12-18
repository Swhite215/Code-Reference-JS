const Reservation = require("./reservation");
const expect = require("chai").expect;
const should = require("chai").should();

describe("Sync and Async - Reservation Library", function() {
    //Synchronous Code
    context("Date and Time Combination", function() {
        it("should return a ISO 8601 date and time with valid input", function() {
            const date = "2017/06/10";
            const time = "06:02 AM";

            Reservation.combineDateTime(date, time).should.equal(
                "2017-06-10T06:02:00.000Z"
            );
        });

        it("should return null on a bad date and time", function() {
            const date = "test";
            const time = "fail";

            should.not.exist(Reservation.combineDateTime(date, time));
        });
    });

    //Asynchronous Code - Callback
    context("Validator", function() {
        it("should pass a valid reservation with no optional field", function(done) {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username@example.com"
            });

            reservation.validator(function(error, value) {
                value.should.deep.equal(reservation);
                done(error);
            });
        });

        it("should fail a registration with a bad email", function(done) {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username"
            });

            reservation.validator(function(error) {
                error.should.be.an("error").and.not.be.null;
                done();
            });
        });
    });
});
