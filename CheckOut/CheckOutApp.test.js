const {calculateDiscount, calculateVat, calculateTotalBill} = require("./CheckOutApp");

test ("for calculate discount", ()=> {
    let result = calculateDiscount(1000, 10);
    expect(result).toBe(100);
})

test("for calculate discount with zero discount", ()=> {
    let result = calculateDiscount(1000, 0);
    expect(result).toBe(0);
});

test("for calculate discount with 100 percent discount", ()=> {
    let result = calculateDiscount(1000, 100);
    expect(result).toBe(1000);
});

test ("for calculate vat", ()=> {
    let result = calculateVat(1000, 100);
    expect(result).toBe(67.5);
})

test("forcalculate vat with zero discount", ()=> {
    let result = calculateVat(1000, 0);
    expect(result).toBe(75);
});

test("for calculate vat with decimal subtotal", ()=> {
    let result = calculateVat(1234.56, 100);
    expect(result).toBeCloseTo(85.09);
});

test ("for calculate total bill", ()=> {
    let result = calculateTotalBill(1000, 100, 67.5);
    expect(result).toBe(967.5);
})

test("for calculate total bill with decimal values", ()=> {
    let result = calculateTotalBill(1234.56, 100, 85.09);
    expect(result).toBeCloseTo(1219.65);
});

test("for calculate total bill with zero values", ()=> {
    let result = calculateTotalBill(0, 0, 0);
    expect(result).toBe(0);
});

test("for calculate total bill with full discount", ()=> {
    let discount = calculateDiscount(500, 100);
    let vat = calculateVat(500, discount);
    let total = calculateTotalBill(500, discount, vat);

    expect(total).toBeGreaterThanOrEqual(0);
});