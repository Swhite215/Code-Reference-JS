// Typing the Function
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
}

// Writing the Function Type
let myAddV2: (x: number, y: number) => number = function(x: number, y:number): number {
    return x + y;
} 

// Optional and Default Parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("Spencer");
let result2 = buildName("Spencer", undefined);
let result3 = buildName("Spencer", "White");

// Default Parameter
function buildNameV2(firstName: string, lastName = "White") {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
} 

// Rest Parameters
function buildNameV3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNameV3("Joseph", "Samuel", "Lucas", "Mary", "Traegar");