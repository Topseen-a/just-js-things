let array = [3,4,7,5,2]

function maximumIn(array){
    let maximum = array[0];
    for (let count = 0; count < array.length; count++){
        if (array[count] > maximum){
            maximum = array[count];       
        }
    }
    return maximum;
}

function minimumIn(array){
    let minimum = array[0];
    for (let count = 0; count < array.length; count++){
        if (array[count] < minimum){
            minimum = array[count];
        }
    }
    return minimum;
}

function sumOf(array){
    let sum = 0;
    for (let count = 0; count < array.length; count++){
        sum += array[count];
    }
    return sum;
}

function sumOfEvenNumbersIn(array){
    let sum = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 == 0){
            sum += array[count];
        }
    }
    return sum;
}

function sumOfOddNumbersIn(array){
    let sum = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 != 0){
            sum += array[count];
        }
    }
    return sum;
}

function maximumAndMinimumOf(array){
    let newArray = [2];
    let maximum = array[0];
    let minimum = array[0];
    for (let count = 0; count < array.length; count++){
        if (array[count] > maximum){
            maximum = array[count];
        }
        if (array[count] < minimum){
            minimum = array[count];
        }
    }
    newArray[0] = maximum;
    newArray[1] = minimum;
    return newArray;
}

function noOfOddNumbers(array){
    counter = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 != 0){
            counter++;    
        }
    }
    return counter;
}

function noOfEvenNumbers(array){
    counter = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 == 0){
            counter++;
        }
    }
    return counter;
}

function evenNumbersIn(array){
    let evenCount = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 == 0){
            evenCount++;
        }
    }
    
    let newArray = [evenCount];
    let index = 0;
    for (let count = 0; count < array.length; count++){
        if (array[count] % 2 == 0){
            newArray[index] = array[count];
            index++;
        } 
    }
    return newArray;
}

