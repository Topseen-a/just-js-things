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


