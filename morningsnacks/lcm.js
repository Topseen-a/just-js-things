const prompt = require("prompt-sync")();

let numberOne = prompt("Enter a number: ");
let numberTwo = prompt("Enter another number: ");

let lcm = numberOne;
    
if (numberTwo > lcm){
    lcm = numberTwo
    }
while (true){
    if (lcm % numberOne == 0 && lcm % numberTwo == 0){
        break;
        }
        lcm++
    }
console.log("LCM of", numberOne, "and", numberTwo, "is", lcm)
