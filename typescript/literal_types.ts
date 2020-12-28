// Literal Narrowing - reducing from infinite to a smaller finite number of potential values

// String Literals
type Easing = "ease-in" | "ease-out" | "ease-in-out";

// Numeric Literals
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return(Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

// Boolean Literals
interface ValidationSuccess {
    isValid: true;
    reason: null;
}

interface ValidationFailure {
    isValid: false;
    reason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;