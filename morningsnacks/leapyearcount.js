let count = 0;

for (let year = 1900; year <= 2025; year++){
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        count++;
        }
    }
console.log("Number of leap year that exist is: ", count)
