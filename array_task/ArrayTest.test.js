const {getScoresGreaterThan70, increaseBy5, squareOfNumbers, distributeBooks, getAfternoonClasses, trackExpenses, convertToLetterGrades, filterUnhealthySnacks, analyzeCustomerOrders, applyDiscount} = require("./Array")

test("for scores greater than 70", ()=>{
    let testScores = [90, 50, 80, 60, 70, 85];
    let answer = [90, 80, 70, 85]
    let result = getScoresGreaterThan70(testScores);
    expect(result).toEqual(answer)
 })

test("for increasing scores by adding 5", ()=>{
    let examGrades = [85, 92, 78, 88, 95];
    let answer = [90, 97, 83, 93, 100];
    let result = increaseBy5(examGrades);
    expect(result).toEqual(answer)
 })

 test("for square of each number", ()=>{
    let integers = [2, 4, 6, 8, 10];
    let answer = [4, 16, 36, 64, 100];
    let result = squareOfNumbers(integers);
    expect(result).toEqual(answer)
 })

test("for distribution of books", ()=>{
    let books = ["The Arrows", "Half of a yellow sun", "The Outcome", "Overflow"];
    let result = distributeBooks(books);
    expect(result).toEqual(["Emily - The Arrows", "Jack - Half of a yellow sun", "Sophia - The Outcome", "Daniel - Overflow"])
 })

test("for finding all afternoon classes", ()=>{
    let classTimings = ["9:00am", "11:00am", "1:00pm", "3:00pm", "5:00pm"];
    let answer = ["1:00pm", "3:00pm", "5:00pm"];
    let result = getAfternoonClasses(classTimings);
    expect(result).toEqual(answer)
 })

 test("for tracking of expenses", ()=>{
    let expenses = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
    let answer = 150 + 100 + 50 + 80;
    let result = trackExpenses(expenses);
    expect(result).toEqual(answer)
 })

 test("for converting scores to letter grades", ()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let answer = ["A", "C", "B", "D", "F", "A"];
    let result = convertToLetterGrades(studentScores);
    expect(result).toEqual(answer)
 })
 
 test("for filetering unhealthy snacks", ()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    
    let answer = ['Fruits', 'Vegetables', 'Dairy'];
    let result = filterUnhealthySnacks(shoppingList);
    expect(result).toEqual(answer)
 })

test("for analyzing customer orders above 100", () => {
    const orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
    ];

    let answer = [
        { id: 2, totalCost: 150 }
    ];

    let result = analyzeCustomerOrders(orders);
    expect(result).toEqual(answer);
});

test("for discount on high priced product", () => {
    const products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 600 },
        { name: "Mouse", price: 25 },
        { name: "Monitor", price: 200 },
    ];

    const answer = [
        { name: "Laptop", originalPrice: 1200, discountedPrice: 1080 },
        { name: "Phone", originalPrice: 600, discountedPrice: 540 },
        { name: "Monitor", originalPrice: 200, discountedPrice: 180 }
    ];

    const result = applyDiscount(products);
    expect(result).toEqual(answer);
});
