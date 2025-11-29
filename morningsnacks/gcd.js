const prompt = require("prompt-sync")();

let numberOne = prompt("Enter a number: ");
let numberTwo = prompt("Enter another number: ");

let gcd = 1;

for (let count = 1; count <= numberOne && count <= numberTwo; count++){
    if (numberOne % count == 0 && numberTwo % count == 0){
        gcd = count;        
        }
}
console.log("GCD is:", gcd)
