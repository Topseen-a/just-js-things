const {isValidLength, getCardType, getDigit, sumOfDoubleEvenPlace, sumOfOddPlace, isValidCard} = require("./CreditCardApp");

test("for valid card length", ()=>{
    let result = isValidLength("1234567890123456");
    expect(result).toBe(true);
})

test("for invalid card length", ()=>{
    let result = isValidLength("123456789012");
    expect(result).toBe(false);
})

test("for Visa card type", ()=>{
    let result = getCardType("4123456789012");
    expect(result).toBe("Visa Card");
})

test("for MasterCard type", ()=>{
    let result = getCardType("5123456789012345");
    expect(result).toBe("MasterCard");
})

test("for American Express card type", ()=>{
    let result = getCardType("371234567890123");
    expect(result).toBe("American Express Card");
})

test("for Discover card type", ()=>{
    let result = getCardType("6123456789012345");
    expect(result).toBe("Discover Card");
})

test("for unknown card type", ()=>{
    let result = getCardType("7123456789012345");
    expect(result).toBe("Unknown");
})

test("for get digit for number less than 10", ()=>{
    let result = getDigit(7);
    expect(result).toBe(7);
})

test("for get digit for number greater than 10", ()=>{
    let result = getDigit(12);
    expect(result).toBe(3);
})

test("for sum of double even place", ()=>{
    let result = sumOfDoubleEvenPlace("1234567890123456");
    expect(result).toBe(32);
})

test("for sum of odd place", ()=>{
    let result = sumOfOddPlace("1234567890123456");
    expect(result).toBe(32);
})

test("for valid credit card number", ()=>{
    let result = isValidCard("4532015112830366");
    expect(result).toBe(true);
})

test("for invalid credit card number", ()=>{
    let result = isValidCard("1234567890123456");
    expect(result).toBe(false);
})
