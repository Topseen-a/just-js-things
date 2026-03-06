// Function declaration

function add() {
    console.log(2+2)

}
add();

// Function expression

const subtractNumbers = function() {
    console.log(4-2)
}
subtractNumbers();

// Arrow functions

let smallerNumber = 4;
let largerNumber = 8;

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}
console.log(subtract(largerNumber, smallerNumber))

// Nested Funcitons

function nestFunctions(param) {

    let number = 7;

    function add(paramOne) {
        let sum = number + paramOne;
        return sum;
    }

    function subtract(paramTwo) {
        let difference = number - paramTwo;
        return difference;
    }

    function multiply(paramThree) {
        let product = number * paramThree;
        return product;
    }

    return {
        sum: add(param),
        difference: subtract(param),
        product: multiply(param)
    }

    return {
        sum: ()=> number + param,
        difference: ()=> number - param,
        product: ()=> number * param
    }
}

let result = nestFunctions(6);
console.log(result)
console.log(result.sum())

// Call Back Functions

let arrayOfNumbers = [2,3,4,5,6,8];

function manipulateArray(array, callBackFunction) {
    return callBackFunction(array);
}

function getEvenNumbers(numbers) {
    let newArray = [];
    for(let number of numbers) {
        if (number % 2 === 0) {
            newArray.push(number);
        }
    }
    return newArray;
}

console.log(manipulateArray(arrayOfNumbers, getEvenNumbers))

function addTwo(array) {
    let newArray = [];
    array.forEach((element) => {
        let answer = element + 2;
        newArray.push(answer);
    });
    return newArray;
}

const multiplyByTwo = (numbers)=>{
    let result = numbers.map((number)=>(number * 2));
    return result;
}

function getEvenNumbers(array) {
    return array.filter((number)=>(number % 2 === 0));
}

module.exports = {addTwo, multiplyByTwo, getEvenNumbers}
