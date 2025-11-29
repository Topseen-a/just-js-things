for (let number = 1; number <= 1000; number++){
    let sum = 0;
    for (let count = 1; count < number; count++){
        if (number % count == 0){
            sum += count;
        }
    }
    if (sum == number){
    console.log(number)
    }
}
