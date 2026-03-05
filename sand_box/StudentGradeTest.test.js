// const {validateScore, calculateStudentTotal, calculateClassSummary} = require("./studentGradeApp");

test("valid score should return true", ()=>{
    expect(validateScore(50)).toBe(true);
});

test("invalid score below range", ()=>{
    expect(validateScore(-5)).toBe(false);
});

test("invalid score above range", ()=>{
    expect(validateScore(150)).toBe(false);
});

test("calculate student total", ()=>{
    expect(calculateStudentTotal([50, 40, 10])).toBe(100);
});

test("calculate class summary", ()=>{
    let matrix = [
        [50, 40],
        [70, 60]
    ];

    let summary = calculateClassSummary(matrix);

    expect(summary.studentTotals).toEqual([90, 130]);
    expect(summary.highestScore).toBe(70);
    expect(summary.lowestScore).toBe(40);
    expect(summary.classAverage).toBeCloseTo(55);
});
