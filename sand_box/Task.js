let array = [3,4,5,6,7];
console.log(getValue(array));

function getValue(array){
    for (let count = 0; count < array.length; count++){
        if(array[count] % 2 == 0){
                array[count]++;
            }
        else {
            array[count] -=2;
        }
    }
        return array;
}

