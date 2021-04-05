let base = 2;
let number = 37;

function baseExpansion(base, number) {
    let q = number;
    let k = 0;
    let convertedNumber = "";
    console.log("Initially b = 2, q = 37, k = 0, (test with (37)₁₀ = (100101)₂)")

    while (q != 0) {
        console.log(`While q = ${q} and q != 0`);
        let quotient = Math.floor(q / base); // Quotient - Rounded Down
        let calculatedValue = quotient * base; // Calculated Value
        let remainder = q - calculatedValue;
        console.log(`a${k} := (${q} mod ${base}) = ${remainder}`);
        console.log(`q := (${q} / ${base}) = ${quotient}`);
        convertedNumber = String(remainder) + convertedNumber;
        k++;
        console.log(`k := (k+1) = ${k}`);
        q = quotient;
    }

    let outputString = "";

    for (let i = 0; i < k; i++) {
        outputString += `a${i}`;
    }

    console.log(`return ${outputString} = ${convertedNumber}; output binary number (${number})₁₀ = (${convertedNumber})₂`);

    return convertedNumber;
}

let binaryOf37 = baseExpansion(2, 37);
let binaryOf22 = baseExpansion(2, 22);

console.log("DONE");