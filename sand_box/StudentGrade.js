const prompt = require("prompt-sync")();

function main(){
    let numberOfStudents = parseInt(prompt("Enter number of students: "));
    let numberOfSubjects = parseInt(prompt("Enter number of subjects: "));

    let scoresMatrix = collectScores(numberOfStudents, numberOfSubjects);

    let summary = calculateClassSummary(scoresMatrix);

    displaySummary(summary);
}


function validateScore(score){
    return score >= 0 && score <= 100;
}

function collectScores(numberOfStudents, numberOfSubjects){
    let scores = [];

    for(let student = 0; student < numberOfStudents; student++){
        let studentScores = [];

        console.log(`\nEntering scores for Student ${student + 1}`);

        for(let subject = 0; subject < numberOfSubjects; subject++){

            let score;

            while(true){
                score = parseFloat(
                    prompt(`Enter score for Subject ${subject + 1}: `)
                );

                if(validateScore(score)){
                    break;
                }

                console.log("Score must be between 0 and 100");
            }

            studentScores.push(score);
        }

        scores.push(studentScores);
    }

    return scores;
}

function calculateStudentTotal(studentScores){
    return studentScores.reduce((a, b) => a + b, 0);
}

function calculateClassSummary(scoresMatrix){
    let studentTotals = [];
    let highestScore = -Infinity;
    let lowestScore = Infinity;
    let classTotal = 0;
    let numberOfScores = 0;

    for(let studentScores of scoresMatrix){

        let studentTotal = calculateStudentTotal(studentScores);
        studentTotals.push(studentTotal);

        for(let score of studentScores){
            if(score > highestScore) highestScore = score;
            if(score < lowestScore) lowestScore = score;

            classTotal += score;
            numberOfScores++;
        }
    }

    let classAverage = classTotal / numberOfScores;

    return {
        studentTotals,
        classAverage,
        highestScore,
        lowestScore
    };
}

function displaySummary(summary){
    console.log("\n===== CLASS SUMMARY =====");

    summary.studentTotals.forEach((total, index)=>{
        console.log(`Student ${index + 1} Total = ${total}`);
    });

    console.log(`Class Average = ${summary.classAverage.toFixed(2)}`);
    console.log(`Highest Score = ${summary.highestScore}`);
    console.log(`Lowest Score = ${summary.lowestScore}`);
}




if(require.main === module){
    main();
}

module.exports = {
    validateScore,
    collectScores,
    calculateStudentTotal,
    calculateClassSummary
};