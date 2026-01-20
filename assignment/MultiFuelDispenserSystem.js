const prompt = require("prompt-sync")();

const fuelNames = ["Petrol", "Diesel", "Kerosene", "Gas"];
const fuelPrice = [739, 1600, 958, 1000];

const fuelHistory = new Array(50);
const litreHistory = new Array(50);
const amountHistory = new Array(50);
const historyDate = new Array(50);
let transactionCount = 0;

console.log("Welcome to our Filling Station\n");

let choice = -1;

while (choice !== 0){
    console.log("Available Petroleum");
    console.log("1. Buy Petroleum");
    console.log("2. Show Transaction History");
    console.log("0. Exit");

    choice = parseInt(prompt("Choose an option: "));

    switch (choice){
        case 1:
            buyFuel();
            break;

        case 2:
            showTransactionHistory();
            break;

        case 0:
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid option, try again\n");
    }
}

function buyFuel(){
    for (let count = 0; count < fuelNames.length; count++){
        console.log((count + 1) + ". " + fuelNames[count] + " @ " + fuelPrice[count]);
    }

    let fuelChoice = parseInt(prompt("Choose an option: "));

    if (fuelChoice < 1 || fuelChoice > fuelNames.length){
        console.log("Invalid choice");
        return;
    }

    let index = fuelChoice - 1;
    let fuel = fuelNames[index];
    let price = fuelPrice[index];

    let methodOfBuyingFuel = getBuyingMethod();

    let litres = 0;
    let amount = 0;

    if (methodOfBuyingFuel.toLowerCase() === "litres"){
        litres = getValidLitres();
        amount = calculateAmount(litres, price);
    } 
    else if (methodOfBuyingFuel.toLowerCase() === "amount"){
        amount = getValidAmount(price);
        litres = calculateLitres(amount, price);
    }
    else {
        console.log("Invalid input");
        return;
    }

    saveTransaction(fuel, litres, amount);
    printReceipt(fuel, litres, amount);
}

function getBuyingMethod(){
    let method = prompt("Litres or Amount? ");
    return method;
}

function getValidLitres(){
    let litres;
    while (true){
        litres = parseFloat(prompt("How many litres of fuel are you buying? "));
        if (litres >= 1 && litres <= 50){
            break;
        }
        else {
            console.log("Litres must be between 1-50");
        }
    }
    return litres;
}

function getValidAmount(price){
    let amount;
    while (true){
        amount = parseFloat(prompt("How much are you buying? "));
        if (amount >= price){
            break;
        }
        else {
            console.log("Amount must be more than litre price");
        }
    }
    return amount;
}

function calculateAmount(litres, price){
    let amount = litres * price
    return amount;
}

function calculateLitres(amount, price){
    let litres = amount / price;
    return litres;
}

function saveTransaction(fuel, litres, amount){
    if (transactionCount >= fuelHistory.length){
        console.log("Transaction history full");
        return;
    }

    fuelHistory[transactionCount] = fuel;
    litreHistory[transactionCount] = litres;
    amountHistory[transactionCount] = amount;
    historyDate[transactionCount] = new Date().toISOString().split("T")[0];
    transactionCount++;

    console.log("Saving transaction history...\n");
}

function printReceipt(fuel, litres, amount){
    console.log("Customer's Transaction Receipt");
    console.log("===========================================");
    console.log("Product: " + fuel);
    console.log("Amount: #" + amount);
    console.log("Litres: " + litres + "L");
    console.log("Thank you for your patronage");
    console.log("===========================================\n");
}

function showTransactionHistory(){
    if (transactionCount === 0){
        console.log("No transactions found\n");
        return;
    }

    for (let count = 0; count < transactionCount; count++){
        console.log("===========================================");
        console.log("Product: " + fuelHistory[count]);
        console.log("Amount: #" + amountHistory[count]);
        console.log("Litres: " + litreHistory[count] + "L");
        console.log("Date: " + historyDate[count]);
        console.log("===========================================\n");
    }
}
