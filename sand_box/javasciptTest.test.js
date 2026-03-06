 const {addTwo, multiplyByTwo, getEvenNumbers} = require("./Functions")
 
 test("add two numbers", ()=>{
    expect(2+2).toBe(4)
 })

 test("for odd numbers", ()=>{
    let numbers = [9,4,6,3,7,7]; //Arrange
    let result = getOddNumbers(numbers) //Act
    expect(result).toEqual([9,3,7,7])
 })

 test("for even numbers", ()=>{
    let numbers = [9,4,6,3,7,7]; //Arrange
    let result = getEvenNumbers(numbers) //Act
    expect(result).toEqual([4,6])
 })

 test("add two numbers to each element", ()=>{
    let numbers = [9,4,6,3,7,7]; //Arrange
    let result = addTwo(numbers) //Act
    expect(result).toEqual([11,6,8,5,9,9])
 })

 test("multiply each number by two", ()=>{
   let numbers = [6,1,3,5];
   let result = [12,2,6,10];
   let answer = multiplyByTwo(numbers)
   expect(result).toEqual(answer)
 })

 test("get even numbers", ()=>{
    let numbers = [2,1,4,8,7,10]
    let answer = [2,4,8,10]
    let result = getEvenNumbers(numbers);
   expect(result).toEqual(answer)
   })