// Hello World of Generics
function identity<T>(arg: T): T {
    return arg;
}

//let output = identity<string>("MyString");
let output = identity("MyString");

// Working with Generic Type Variables
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}