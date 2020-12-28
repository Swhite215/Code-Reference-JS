// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";

// Template Strings
let fullName: string = "Spencer White";
let age: number = 27;
let sentence: string = `Hello, my name is ${fullName} and I am ${age} years old.`;

// Array
let listOne: number[] = [1, 2, 3];
let listTwo: Array<number> = [1, 2, 3];

interface person {
    firstName: string,
    lastName: string
}

let listThree: Array<person> = [
    {
        firstName: "Spencer",
        lastName: "White"
    }
]

// Tuple
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substring(2));

// Enum
enum Color {
    Red, Green, Blue
}

let c: Color = Color.Green;
let c1: string = Color[1];

enum ColorSetTwo {
    Red = 1, Green, Blue
}

let c2: Color = Color.Red;
let c3: string = Color[1];