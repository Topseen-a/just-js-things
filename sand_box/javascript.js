function getEvenNumbers(numbers) {
    let newArray = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            newArray.push(number)
        }
    }
    return newArray
}

function getOddNumbers(numbers) {
    let newArray = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            newArray.push(number)
        }
    }
    return newArray
}

module.exports = {getEvenNumbers, getOddNumbers}
