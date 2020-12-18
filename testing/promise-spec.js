const should = require("chai").should();
const Reservation = require("./reservation");
const reservations = require("./reservations");

describe("Promises - Reservations Library", function() {
    //Asynchronous Code - Promise
    context("Validate", function() {
        it("should pass a valid reservation with no optional fields", function() {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username@example.com"
            });

            //Can promise chain given .validate() returns a promise
            return reservations
                .validate(reservation)
                .then(actual => actual.should.deep.equal(reservation));
        });

        it("should pass a fail an invalid reservation with no optional fields", function() {
            const reservation = new Reservation({
                date: "2017/06/10",
                time: "06:02 AM",
                party: 4,
                name: "Family",
                email: "username"
            });

            //Can promise chain given .validate() returns a promise
            return reservations
                .validate(reservation)
                .catch(error => error.should.be.an("error").and.not.be.null);
        });
    });
});
