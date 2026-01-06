const prompt = require("prompt-sync")()

let currentDay = 0;
let cycle_length = 0;
let periodDuration = 0;

while(true){
    currentDay = Number(prompt("Enter current day of your cycle: "));
    cycleLength = Number(prompt("How many days is your full cycle? "));
    periodDuration = Number(prompt("How many days does bleeding last? "));

    if (currentDay < 1 || currentDay > cycleLength){
        console.log("Invalid day entered, try again");
        continue;
    }
    if (cycleLength < 21){
        console.log("Cycle length is too short, try again");
        continue;
    }
    if (periodDuration < 1 || periodDuration > cycleLength){
        console.log("Invalid bleeding duration, try again");
        continue;
    }
    break;
}

let nextCycle = cycleLength - currentDay;

let ovulationDay = cycleLength - 14;

let daysToOvulation = ovulationDay - currentDay;

let fertileStart = ovulationDay - 4;
let fertileStop = ovulationDay + 1;

let safePeriodOneStart = periodDuration + 1;
let safePeriodOneStop = fertileStart - 1;

let safePeriodTwoStart = fertileStop + 1;
let safePeriodTwoStop = cycleLength;

if (currentDay >= 1 && currentDay <= periodDuration){
    console.log("You are currently in your menstrual flow phase");
}
else if (currentDay == ovulationDay){
    console.log("Today is your ovulation day");
}
else if (currentDay >= fertileStart && currentDay <= fertileStop){
    console.log("You are in your fertile window (high risk of pregnancy)");
}
else if ((currentDay >= safePeriodOneStart && currentDay <= safePeriodOneStop) || (currentDay >= safePeriodTwoStart && currentDay <= safePeriodTwoStop)){
    console.log("You are in your fertile window (low risk of pregnancy)");
}
else {
    console.log("Unable to determine your current phase");
}

console.log("Your next menstrual cycle starts in " + nextCycle + " days");
console.log("Your next ovulation day is in " + daysToOvulation + " days");
