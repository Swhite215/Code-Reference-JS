//TypeScript is a superset of JavaScript
//npm install -g typescript
//npm i @types
//npm run build = tsc --w
//npm start tsc && ts-node ./dist/index.js
//run tsc filename to transpile

//imports
import { modulePoint } from "./TypeModule";

//Type Annotations - Used to enforce type checking
let number: number = 10;
let bool: boolean = false;
let string: string = "Test";
let any: any = "Any Type!";
let numArray: number[] = [1, 2, 3, 4];
let stringArray: string[] = ["Test", "Test", "Test"];
let anyArray: any[] = ["One", 2, "Three", true];

//Enum - Categorical Constants
enum Colors {
    Red = 0,
    Green = 1,
    Blue = 2
}
let colorOne = Colors.Blue;

//Type Assertions - Asserting the type of a value
let message: string = "abc";
let assertedMessageOne = <string>message;
let assertedMessageTwo = message as string;

//Function Declarations - Lambda/Arrow
const log = message => {
    console.log(message);
};

//Interface - Defines shape of an object, can't have implementation
interface PointInterface {
    x: number;
    y: number;
}

//Object producing error
let errorObject: PointInterface = {
    name: "Hello", //Will raise error due to conflicting property value
    id: 1
};

//Acceptable Object
let acceptableObject: PointInterface = {
    x: 1,
    y: 1
};

//Declared method expecting argument of type and shape Point
let drawPoint = (point: Point) => {
    //...
};

drawPoint({ name: "Test" }); //Will raise error due to object difference

//Class - Fields and Methods
class Point {
    constructor(x: number, y: number, optional?: number, privateVar?: string) {
        this.x = x;
        this.y = y;
        this.optional = optional;
        this.privateVar = privateVar;
    }

    x: number;
    y: number;
    optional: number;
    private privateVar: string;

    draw = () => {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    getDistance = () => {
        //...
    };
}

//Instance of the Point class
let point = new Point(1, 2);
point.draw();

//Access Modifiers - Public = Default, Private, Protected
let pointTwo = new Point(1, 2);
pointTwo.privateVar; //Will throw error because of access modifier

//Alternate Class Declaration - Adding access modifiers to constructor parameter
class simplerPoint {
    constructor(
        public x: number,
        public y: number,
        public optional?: number,
        private privateVar?: string
    ) {}

    draw = () => {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    getDistance = () => {
        //...
    };
}

let pointThree = new simplerPoint(1, 3);
pointThree.draw();

//Alternate Class Direction - Adding Getters and Setters
//Getter or Setter binds object property to a function that will be called when that property is accessed
class getAndSetPoint {
    constructor(
        private _x: number,
        private _y: number,
        private optional?: number,
        private privateVar?: string
    ) {}

    //Method to Get X value
    getX = () => {
        return this._x;
    };

    //Method to set X Value
    setX = value => {
        this._x = value;
    };

    //Getter
    get x() {
        return this._x;
    }

    //Setter
    set x(value) {
        this._x = value;
    }
}

let pointFour = new getAndSetPoint(1, 3);
console.log(pointFour.x);
pointFour.x = 10;

//Module Example
let pointFive = new modulePoint(10, 10);
console.log(pointFive.x);
pointFive.x = 100; // Set using Setter property
pointFive.setX(200); //Set using Set method
pointFive.x; // Get using Getter property
pointFive.getX; //Get using Get method
