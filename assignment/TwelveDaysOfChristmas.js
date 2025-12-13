for (let day = 1; day <= 12; day++) {

    process.stdout.write("On the ");

    switch (day) {
        case 1:  process.stdout.write("first"); break;
        case 2:  process.stdout.write("second"); break;
        case 3:  process.stdout.write("third"); break;
        case 4:  process.stdout.write("fourth"); break;
        case 5:  process.stdout.write("fifth"); break;
        case 6:  process.stdout.write("sixth"); break;
        case 7:  process.stdout.write("seventh"); break;
        case 8:  process.stdout.write("eighth"); break;
        case 9:  process.stdout.write("ninth"); break;
        case 10: process.stdout.write("tenth"); break;
        case 11: process.stdout.write("eleventh"); break;
        case 12: process.stdout.write("twelfth"); break;
    }

    console.log(" day of Christmas, my true love sent to me:");

    switch (day) {
        case 12:
            console.log("Twelve drummers drumming,");
        case 11:
            console.log("Eleven pipers piping,");
        case 10:
            console.log("Ten lords a-leaping,");
        case 9:
            console.log("Nine ladies dancing,");
        case 8:
            console.log("Eight maids a-milking,");
        case 7:
            console.log("Seven swans a-swimming,");
        case 6:
            console.log("Six geese a-laying,");
        case 5:
            console.log("Five golden rings,");
        case 4:
            console.log("Four calling birds,");
        case 3:
            console.log("Three French hens,");
        case 2:
            console.log("Two turtle doves,");
        case 1:
            if (day == 1)
                console.log("A partridge in a pear tree.");
            else
                console.log("And a partridge in a pear tree.");
            break;
    }

    console.log();
}

