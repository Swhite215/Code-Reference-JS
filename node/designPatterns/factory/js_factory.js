class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case "civic":
                return new Car(4, "v6", "red");
            case "honda":
                return new Car(2, "v4", "blue");
        }
    }
}

class Truck {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class TruckFactory {
    createTruck(type) {
        switch (type) {
            case "silverado":
                return new Truck(4, "v8", "silver");
            case "colorado":
                return new Truck(4, "v8", "gold");
        }
    }
}

const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

//Abstract Factory
const autoManufacturer = (type, model) => {
    switch (type) {
        case "car":
            return carFactory.createCar(model);
        case "truck":
            return truckFactory.createTruck(model);
    }
};

//Mix-In
let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} is doing Vroom Vroom`);
    }
};

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer("car", "honda");
const silverado = autoManufacturer("truck", "silverado");
console.log(honda);
console.log(silverado);
honda.revEngine();
