const prompt = require("prompt-sync")();

function main() {
    let customerName = prompt("What is the customer's name? ");

    let items = [];
    let quantityOfItems = [];
    let prices = [];

    let {numberOfItems, subTotal} = collectItems(items, quantityOfItems, prices);

    let cashierName = prompt("What is your name? ");
    let discountInput = parseFloat(prompt("How much discount will he get? "));

    let discount = calculateDiscount(subTotal, discountInput);
    let vat = calculateVat(subTotal, discount);
    let totalBill = calculateTotalBill(subTotal, discount, vat);

    printHeader(cashierName, customerName);
    printItems(items, quantityOfItems, prices, numberOfItems);
    printSummary(subTotal, discount, vat, totalBill);

    console.log("THIS IS NOT A RECEIPT, KINDLY PAY " + totalBill);
    console.log("===========================================");

    let amountPaid = parseFloat(prompt("How much did the customer give to you? "));
    let balance = amountPaid - totalBill;

    printFinalReceipt(
        cashierName, customerName, items, quantityOfItems,
        prices, numberOfItems, subTotal, discount,
        vat, totalBill, amountPaid, balance
    );
}



function collectItems(items, quantityOfItems, prices) {
    let numberOfItems = 0;
    let subTotal = 0;

    while (true){
        let item = prompt("What did the user buy? ");
        items.push(item);

        let quantity = parseInt(prompt("How many pieces? "));
        quantityOfItems.push(quantity);

        let price = parseFloat(prompt("How much per unit? "));
        prices.push(price);

        subTotal += quantity * price;
        numberOfItems++;

        let choice = prompt("Add more items (yes/no)? ");
        if (choice.toLowerCase() === "no"){
            break;
        }
    }
    return {numberOfItems, subTotal};
}

function calculateDiscount(subTotal, discountInput) {
    return (discountInput / 100) * subTotal;
}

function calculateVat(subTotal, discount) {
    return 0.075 * (subTotal - discount);
}

function calculateTotalBill(subTotal, discount, vat) {
    return subTotal - discount + vat;
}

function printHeader(cashierName, customerName) {
    console.log();
    console.log("SEMICOLON STORES");
    console.log("MAIN BRANCH");
    console.log("LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.");
    console.log("TEL: 03293828343");
    console.log("Cashier: " + cashierName);
    console.log("Customer Name: " + customerName);
    console.log("===========================================");
    console.log("ITEM\tQTY\tPRICE\tTOTAL(NGN)");
    console.log("-------------------------------------------");
}

function printItems(items, quantityOfItems, prices, numberOfItems) {
    for (let index = 0; index < numberOfItems; index++){
        let total = quantityOfItems[index] * prices[index];
        console.log(items[index] + "\t" + quantityOfItems[index] + "\t" + prices[index] + "\t" + total);
    }
}

function printSummary(subTotal, discount, vat, totalBill) {
    console.log("-------------------------------------------");
    console.log("Sub Total: \t" + subTotal);
    console.log("Discount: \t" + discount);
    console.log("Vat @ 7.5%: \t" + vat);
    console.log("===========================================");
    console.log("Bill Total: \t" + totalBill);
    console.log("===========================================");
}

function printFinalReceipt(
    cashierName, customerName, items,
    quantityOfItems, prices, numberOfItems,
    subTotal, discount, vat, totalBill,
    amountPaid, balance
) {
    printHeader(cashierName, customerName);
    printItems(items, quantityOfItems, prices, numberOfItems);
    printSummary(subTotal, discount, vat, totalBill);

    console.log("Amount Paid: \t" + amountPaid);
    console.log("Balance: \t" + balance);
    console.log("===========================================");
    console.log("THANK YOU FOR YOUR PATRONAGE");
    console.log("===========================================");
}


if (require.main === module) {
    main();
}

module.exports = {calculateDiscount, calculateVat, calculateTotalBill};