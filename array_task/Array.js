function getScoresGreaterThan70(scores){
    return scores.filter((score)=>(score >= 70));
}

function increaseBy5(grades) {
    return grades.map((grade)=>(grade + 5));
}

function squareOfNumbers(integers) {
    return integers.map((integer)=>(integer * integer));
}

books = ["The Arrows", "Half of a yellow sun", "The Outcome", "Overflow"];
function distributeBooks(books) {
    let students = ["Emily", "Jack", "Sophia", "Daniel"];
    let distribution = [];
    for (const element of students.keys()) {
        distribution.push(students[element] + " - " + books[element]);
    }
    return distribution;
}

function getAfternoonClasses(classTimings) {
    return classTimings.filter((timing)=>(timing.includes("pm")));
}

function trackExpenses(expenses) {
    let total = 0;
    for (let key in expenses) {
        total += expenses[key];
    }
    return total;
}

function convertToLetterGrades(scores) {
    return scores.map((score)=>{
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    });
}

function filterUnhealthySnacks(shoppingList) {
    shoppingList.filter((item)=>(item.isHealthy)).map((item)=>(item.category.toLowerCase()));
    let healthyItems = [];
    shoppingList.forEach((item)=>{
        if (item.isHealthy) {
            healthyItems.push(item.category);
        }
    });
    return healthyItems;
}
    
function analyzeCustomerOrders(orders) {
    return orders.map(order => {
        const totalCost = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { id: order.id, totalCost };
        })
        .filter(order => order.totalCost > 100);
}

function applyDiscount(products) {
    return products.filter(product => product.price > 50).map(product => ({
            name: product.name,
            originalPrice: product.price,
            discountedPrice: product.price - (0.1 * product.price)
        }));
}


module.exports = {getScoresGreaterThan70, increaseBy5, squareOfNumbers, distributeBooks, getAfternoonClasses, trackExpenses, convertToLetterGrades, filterUnhealthySnacks, analyzeCustomerOrders, applyDiscount};