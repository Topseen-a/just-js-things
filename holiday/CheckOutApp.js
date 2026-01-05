const prompt = require("prompt-sync")();

let customerName = prompt("What is the customer's name? ");

let items = [];
let quantityOfItems = [];
let prices = [];

let subTotal = 0;

while (true){
    let item = prompt("What did the user buy? ");
    items.push(item);

    let quantity = parseInt(prompt("How many pieces? "));
    quantityOfItems.push(quantity);

    let price = parseFloat(prompt("How much per unit? "));
    prices.push(price);

    subTotal += quantity * price;

    let choice = prompt("Add more items (yes/no)? ").toLowerCase();
    if (choice === "no"){
        break;
    }
}

let cashierName = prompt("What is your name? ");
let discountInput = parseFloat(prompt("How much discount will he get? "));

let discount = (discountInput / 100) * subTotal;
let vat = 0.075 * (subTotal - discount);
let totalBill = subTotal - discount + vat;

console.log();
console.log("SEMICOLON STORES");
console.log("MAIN BRANCH");
console.log("LOCATION: 312, HERBERT MACAULY WAY, SABO YABA, LAGOS.");
console.log("TEL: 03293828343");
console.log("Cashier:", cashierName);
console.log("Customer Name:", customerName);
console.log("===========================================");
console.log("ITEM\tQTY\tPRICE\tTOTAL(NGN)");
console.log("-------------------------------------------");

for (let index = 0; index < items.length; index++){
    let total = quantityOfItems[index] * prices[index];
    console.log(items[index] + "\t" + quantityOfItems[index] + "\t" + prices[index] + "\t" + total);
}

console.log("-------------------------------------------");
console.log("Sub Total:\t", subTotal);
console.log("Discount:\t", discount);
console.log("Vat @ 7.5%:\t", vat);
console.log("===========================================");
console.log("Bill Total:\t", totalBill);
console.log("===========================================");
console.log("THIS IS NOT A RECEIPT, KINDLY PAY", totalBill);
console.log("===========================================");

let amountPaid = parseFloat(prompt("How much did the customer give to you? "));

let balance = amountPaid - totalBill;

console.log();
console.log("SEMICOLON STORES");
console.log("MAIN BRANCH");
console.log("LOCATION: 312, HERBERT MACAULY WAY, SABO YABA, LAGOS.");
console.log("TEL: 03293828343");
console.log("Cashier:", cashierName);
console.log("Customer Name:", customerName);
console.log("===========================================");
console.log("ITEM\tQTY\tPRICE\tTOTAL(NGN)");
console.log("-------------------------------------------");

for (let index = 0; index < items.length; index++) {
    let total = quantityOfItems[index] * prices[index];
    console.log(items[index] + "\t" + quantityOfItems[index] + "\t" + prices[index] + "\t" + total);
}

console.log("-------------------------------------------");
console.log("Sub Total:\t", subTotal);
console.log("Discount:\t", discount);
console.log("Vat @ 7.5%:\t", vat);
console.log("===========================================");
console.log("Bill Total:\t", totalBill);
console.log("Amount Paid:\t", amountPaid);
console.log("Balance:\t", balance);
console.log("===========================================");
console.log("THANK YOU FOR YOUR PATRONAGE");
console.log("===========================================");

