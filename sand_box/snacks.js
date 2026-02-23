student = {
    name: "John Doe",
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}
module.exports = {student}

// 1
console.log(student.name)
console.log(student.courses)
console.log(student.address.zip)

// 2
student.age = 23
console.log(student.age)
student.GPA = 3.8;
console.log(student)
function getDetails() {
    console.log("John Doe is 23 years old and has a GPA of 3.8");
}
getDetails()

// 3
bankAccount = {
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
console.log(bankAccount.balance);

bankAccount.withdraw(1000);
console.log(bankAccount.balance)

console.log(bankAccount.balance);

// 4
const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

for (let fruit in inventory) {
    console.log(fruit);
}

let sum = 0;
for (value in inventory) {
    sum += inventory[value];  
}
console.log(sum);

// 5
company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "Topseen", department: "Engineering"},
        {id: 2, name: "Fola", department: "HR"},
        {id: 3, name: "Tobi", department: "Marketing"},
        {id: 4, name: "Tolu", department: "Engineering"}
    ]
};
console.log(company.employees[2].name)

const {name, location} = company;
console.log(name);
console.log(location);

for (let employee of company.employees) {
    console.log(employee.name + ": " + employee.department)
}

// 6
const products = [
    {id: 1, name: "Laptop", price: 1200},
    {id: 2, name: "Phone", price: 800},
    {id: 3, name: "Tablet", price: 500},
    {id: 4, name: "Desktop", price: 700}
];

function findExpensiveProducts(products, threshold) {
    let expensiveProducts = []

    for (let product of products) {
        if(product.price > threshold) {
            expensiveProducts.push(product.name);
        }
    }
    return expensiveProducts;
}
console.log(findExpensiveProducts(products, 700));
