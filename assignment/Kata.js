function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

function getPositiveDifference(firstNumber,secondNumber){
    if (firstNumber > secondNumber){
        return firstNumber - secondNumber;
    }
    else {
        return secondNumber - firstNumber;    
    }
}

function getDivision(firstNumber, secondNumber){
    if (secondNumber == 0){
        return 0;
    }
    else {
        return firstNumber / secondNumber;
    }
}

function factorOf(number){
    let factor = 0;
    for (let count = 1; count <= number; count++){
        if (number % count == 0){
            factor ++;
        }
    }
    return factor;
}

function factorialOf(number){
    let factorial = 1;
    for (let count = 1; count <= number; count++){
        factorial *= count;
    }
    return factorial;
}

function isSquare(number){
    let result = Math.sqrt(number);
    if (result * result == number){
        return true;
    }
    else {
        return false;
    }
}

function isPalindrome(number){
    let firstNumber = Math.floor(number / 10000);
    let secondNumber = Math.floor(number / 1000) % 10;
    let thirdNumber = Math.floor(number / 100) % 10;
    let fourthNumber = Math.floor(number / 10) % 10;
    let fifthNumber = number % 10;

    if (firstNumber == fifthNumber && secondNumber == fourthNumber){
        return true;
    }
    else {
        return false;
    }
}

function squareOf(number){
    return number * number;
}

function isPrime(number){
    if (number <= 1){
        return false;
    }

    for (let count = 2; count <= number / 2; count++){
        if (number % count == 0){
            return false;
        }
    }
    return true;
}
