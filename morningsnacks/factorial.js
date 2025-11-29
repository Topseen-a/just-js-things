const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");
let factorial = 1;

for (let count = 1; count <= number; count++) {
    factorial = factorial * count;
}

console.log("The factorial is: " + factorial);
