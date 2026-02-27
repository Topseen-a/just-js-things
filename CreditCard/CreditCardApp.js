const prompt = require("prompt-sync")();

    let cardNumber = prompt("Enter your card number: ");

    if (!isValidLength(cardNumber)){
        console.log("Invalid credit card length.");
        return;
    }

    let cardType = getCardType(cardNumber);

    if (cardType === "Unknown"){
        console.log("Invalid card type.");
        return;
    }

    console.log("Credit Card Type: " + cardType);
    console.log("Credit Card Number: " + cardNumber);
    console.log("Digit Length: " + cardNumber.length);

    let isValid = isValidCard(cardNumber);

    if (isValid){
        console.log("Credit Card Status: Valid");
    } 
    else {
        console.log("Credit Card Status: Invalid");
    }

function isValidLength(cardNumber){
    return cardNumber.length >= 13 && cardNumber.length <= 16;
}

function getCardType(cardNumber){
    if (cardNumber.startsWith("4")){
        return "Visa Card";
    }
    else if (cardNumber.startsWith("5")){
        return "MasterCard";
    }
    else if (cardNumber.startsWith("37")){
        return "American Express Card";
    }
    else if (cardNumber.startsWith("6")){
        return "Discover Card";
    }
    else {
        return "Unknown";
    }
}

function getDigit(number){
    if (number < 10){
        return number;
    }
    else {
        return Math.floor(number / 10) + (number % 10);
    }
}

function sumOfDoubleEvenPlace(cardNumber){
    let sum = 0;
    for (let count = cardNumber.length - 2; count >= 0; count -= 2){
        let digit = parseInt(cardNumber.charAt(count));
        sum += getDigit(digit * 2);
    }
    return sum;
}

function sumOfOddPlace(cardNumber){
    let sum = 0;
    for (let count = cardNumber.length - 1; count >= 0; count -= 2){
        sum += parseInt(cardNumber.charAt(count));
    }
    return sum;
}

function isValidCard(cardNumber){
    let sumEven = sumOfDoubleEvenPlace(cardNumber);
    let sumOdd = sumOfOddPlace(cardNumber);
    return (sumEven + sumOdd) % 10 === 0;
}

module.exports = {isValidLength, getCardType, getDigit, sumOfDoubleEvenPlace, sumOfOddPlace, isValidCard};