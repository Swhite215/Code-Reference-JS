var Person = require("./Person");

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    //All modifications come from methods
    makeEmployee() {
        this.isEmployee = true;
        return this; //Important to return this as you are chaining methods
    }

    makeManager(hours = 40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime(hours = 20) {
        this.hours = hours;
        return this;
    }

    withMoney(money) {
        this.money = money;
        return this;
    }

    withList(list = []) {
        this.list = list;
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;
