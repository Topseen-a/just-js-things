console.log(toBaseTwo(20));
console.log(convertBase(10100, 2, 5));

function toBaseTwo(number){

    if (number < 0){
        number *= -1;
    }
    if (number === 0){
        return "0";
    }
    else {
        let store = "";

        while (number > 0){
            let remainder = number % 2;
            store += remainder;
            number = Math.floor(number / 2);
        }

        let reverse = "";
        for (let index = store.length - 1; index >= 0; index--){
            reverse += store.charAt(index);
        }
        return reverse;
    }
}

function toBaseFive(number){

    if (number < 0){
        number *= -1;
    }
    if (number === 0){
        return "0";
    } 
    else {
        let store = "";

        while (number > 0){
            let remainder = number % 5;
            store += remainder;
            number = Math.floor(number / 5);
        }

        let reverse = "";
        for (let index = store.length - 1; index >= 0; index--){
            reverse += store.charAt(index);
        }
        return reverse;
    }
}

function toBaseTen(number, fromBase){
    if (number < 0){
        number *= -1;
    }

    let baseTen = 0;
    let power = 0;

    while (number > 0){
        let remainder = number % 10;
        baseTen += remainder * Math.pow(fromBase, power);
        number = Math.floor(number / 10);
        power++;
    }
    return baseTen;
}

function convertBase(number, fromBase, toBase){
    let convertToBase = toBaseTen(number, fromBase);

    if (toBase === 2){
        return toBaseTwo(convertToBase);
    } 
    else if (toBase === 5){
        return toBaseFive(convertToBase);
    } 
    else {
        return "Invalid conversion";
    }
}

