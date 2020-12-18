let object = {}

let one = "one"
let jsonOne = JSON.stringify(one)
let bufferOne = Buffer.from(jsonOne)
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

console.log("Value:", one)
console.log("JSON:", jsonOne)
console.log("Buffer:", bufferOne)
console.log("Decoded:", decoder.write(bufferOne))
console.log("Array Buffer:", bufferOne.toArrayBuffer())

console.log("Buffer.toString()", bufferOne.toString())
console.log("JSON.parse", JSON.parse(bufferOne.toString()))
object["one"] = JSON.parse(bufferOne.toString())

let two = 2
let jsonTwo = JSON.stringify(two)
let bufferTwo = Buffer.from(jsonTwo)

console.log("Value:", two)
console.log("JSON:", jsonTwo)
console.log("Buffer:", bufferTwo)
console.log("Decoded:", decoder.write(bufferTwo))

console.log("Buffer.toString()", bufferTwo.toString())
console.log("JSON.parse", JSON.parse(bufferTwo.toString()))
object["two"] = JSON.parse(bufferTwo.toString())

let three = [1,2,3]
let jsonThree = JSON.stringify(three)
let bufferThree = Buffer.from(jsonThree)

console.log("Value:", three)
console.log("JSON:", jsonThree)
console.log("Buffer:", bufferThree)
console.log("Decoded:", decoder.write(bufferThree))

console.log("Buffer.toString()", bufferThree.toString())
console.log("JSON.parse", JSON.parse(bufferThree.toString()))
object["three"] = JSON.parse(bufferThree.toString())

let four = [{"name": "Spencer", age: 10, skills: ["Shooting", "Flying"]}]
let jsonFour = JSON.stringify(four)
let bufferFour = Buffer.from(jsonFour)

console.log("Value:", four)
console.log("JSON:", jsonFour)
console.log("Buffer:", bufferFour)
console.log("Decoded:", decoder.write(bufferFour))

console.log("Buffer.toString()", bufferFour.toString())
console.log("JSON.parse", JSON.parse(bufferFour.toString()))
object["four"] = JSON.parse(bufferFour.toString())


console.log(object)
console.log(JSON.stringify(object))
console.log(typeof JSON.stringify(object))
