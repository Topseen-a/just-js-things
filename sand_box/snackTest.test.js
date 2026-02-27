const {student, getDetails, bankAccount, company, products, findExpensiveProducts} = require("./snacks");

beforeEach(() => {
    bankAccount.balance = 500;
});

beforeEach(() => {
        inventory = {
            apple: 10,
            banana: 5,
            orange: 8,
            mango: 12
        };
    });

test("for get student's name", () => {
    expect(student.name).toBe("John Doe");
});

test("for get student's courses", () => {
    expect(student.courses).toEqual(["Math", "Physics", "Computer Science"]);
});

test("for get student's zip code", () => {
    expect(student.address.zip).toBe(10001);
});

test("for update student's age", () => {
    expect(student.age).toBe(23);
});

test("for add student's GPA", () => {
    expect(student.GPA).toBe(3.8);
});

test("for get student's details", () => {
    const expected = "John Doe is 23 years old and has a GPA of 3.8";
    expect(getDetails()).toBe(expected);
});

test("for bank account deposit", () => {
    bankAccount.deposit(200);
    expect(bankAccount.balance).toEqual(700);
});

test("for bank account withdraw when amount is too high", () => {
    bankAccount.withdraw(1000);
    expect(bankAccount.balance).toEqual(500);
});

test("for bank account balance", () => {
    expect(bankAccount.balance).toBe(500);
});

 test("for inventory fruits", ()=>{
    let fruits = ["apple", "banana", "orange", "mango"]
    let result = []
    for (let fruit in inventory) {
        result.push(fruit)
    }
    expect(result).toEqual(fruits)
 })

 test("for inventory total quantity", ()=>{
    let sum = 0;
    for (value in inventory) {
        sum += inventory[value];  
    }
    expect(sum).toBe(35);
 })

test("for company details", () => {
    expect(company.name).toBe("TechCorp");
    expect(company.location).toBe("San Francisco");
    expect(company.employees.length).toBe(4);
    expect(company.employees[0].name).toBe("Topseen");
});

test("for produce details", () => {
    expect(products.length).toBe(4);
    expect(products[0].name).toBe("Laptop");
    expect(products[1].price).toBe(800);
});

test("for find expensive products", () => {
    let result = findExpensiveProducts(products, 700);
    expect(result).toEqual(["Laptop", "Phone"]);
});
