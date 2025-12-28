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
console.log(minimumIn(array));

