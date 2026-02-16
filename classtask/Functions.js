// Function declaration
// function add() {
//     console.log(2+2)

// }
// add();

// Function expression
// const subtract = function() {
//     console.log(4-2)
// }
// subtract();

//Arrow functions
let smallerNumber = 4;
let largerNumber = 8;

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}
console.log(subtract(largerNumber, smallerNumber))