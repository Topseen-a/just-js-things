const {calculateDiscount, calculateVat, calculateTotalBill} = require("./CheckOut");

test ("for calculate discount", ()=>{
    let result = calculateDiscount(1000, 10);
    expect(result).toBe(100);
})

test ("for calculate vat", ()=>{
    let result = calculateVat(1000, 100);
    expect(result).toBe(67.5);
})

test ("for calculate total bill", ()=>{
    let result = calculateTotalBill(1000, 100, 67.5);
    expect(result).toBe(967.5);
})