const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");

let sum = 0;

for (let count = 1; count < number; count++){
    if (number % count == 0){
        sum += count;
        }
}

if (sum == number){
    console.log(number,"is a perfect number");
    }
else {
    console.log(number, "is not a perfect number");
    }
