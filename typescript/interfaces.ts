// Basic Interface
interface labeledValue {
    label: string
}

function printLabel(labeledObj: labeledValue): void {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};

printLabel(myObj);

// Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};

    if (config.color) {
        newSquare.color = config.color;
    }

    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: "black" });
let mySecondSquare = createSquare( {color: "red", width: 20 });

// Read Only Properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 100, y: 1000};

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// CANT - ro[0] = 12;
// CANT - ro.push(5);
// CANT - ro.length = 100;
// CANT - a = ro;

// Excess Property Checks
interface SquareConfigTwo {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// Function Types - Call Signature - Parameter List and Return Type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// Class Types
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d:Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

// Extending Interfaces
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// Hybrid Types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;
