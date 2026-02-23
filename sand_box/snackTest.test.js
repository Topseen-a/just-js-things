const {student} = require("./snacks")

test("for get student's name", ()=>{
    let name = "John Doe"
    let result = student.name
    expect(result).toBe(name)
 })

 test("for get student's courses", ()=>{
    let courses = ["Math", "Science", "History"]
    let result = student.courses
    expect(result).toEqual(courses)
 })

 test("for get student's zip code", ()=>{
    let zip = 10001
    let result = student.address.zip
    expect(result).toBe(zip)
 })

 test("for update student's age", ()=>{
    student.age = 23
    let age = 23
    let result = student.age
    expect(result).toBe(age)
 })

 test("for add student's GPA", ()=>{
    student.GPA = 3.8
    let GPA = 3.8
    let result = student.GPA
    expect(result).toBe(GPA)
 }) 

 test("for get student's details", ()=>{
    function getDetails() {
        return "John Doe is 23 years old and has a GPA of 3.8";
    }
    let details = "John Doe is 23 years old and has a GPA of 3.8"
    let result = getDetails()
    expect(result).toBe(details)
 })

 test("for bank account deposit", ()=>{
    const bankAccount = {
        owner: "Alice",
        balance: 500,
        deposit(amount) {
            this.balance += amount;
        },
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Invalid amount");
            } else {
                this.balance -= amount;
            } 
        }
    }
    bankAccount.deposit(200);
    let balance = 700
    let result = bankAccount.balance
    expect(result).toBe(balance)
 })
 
 test("for bank account withdraw", ()=>{
    const bankAccount = {
        owner: "Alice",
        balance: 500,
        deposit(amount) {
            this.balance += amount;
        },
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Invalid amount");
            } else {
                this.balance -= amount;
            } 
        }
    }
    bankAccount.withdraw(1000);
    let balance = 500
    let result = bankAccount.balance
    expect(result).toBe(balance)
 })

 test("for bank account balance", ()=>{
    const bankAccount = {
        owner: "Alice",
        balance: 500,
        deposit(amount) {
            this.balance += amount;
        },
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Invalid amount");
            } else {
                this.balance -= amount;
            } 
        }
    }
    let balance = 500
    let result = bankAccount.balance
    expect(result).toBe(balance)
 })

 test("for inventory fruits", ()=>{
    const inventory = {
        apple: 10,
        banana: 5,
        orange: 8,
        mango: 12
    };
    let fruits = ["apple", "banana", "orange", "mango"]
    let result = []
    for (let fruit in inventory) {
        result.push(fruit)
    }
    expect(result).toEqual(fruits)
 })

 test("for inventory total quantity", ()=>{
    const inventory = {
        apple: 10,
        banana: 5,
        orange: 8,
        mango: 12
    };
    let totalQuantity = 35
    let sum = 0;
    for (value in inventory) {
        sum += inventory[value];  
    }
    expect(sum).toBe(totalQuantity)
 })

 test