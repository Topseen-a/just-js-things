let array = [3,4,7,5,2]

function maximumIn(array){
    let maximum = array[0];
    for (let count = 0; count < array.length; count++){
        if (array[count] > maximum){
            maximum = array[count]        
        }
    }
    return maximum;
}
console.log(maximumIn(array));
