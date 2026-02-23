 const {getEvenNumbers, getOddNumbers} = require("./javascript")
 
 test("add two numbers", ()=>{
    expect(2+2).toBe(4)
 })

 test("for even numbers", ()=>{
    let numbers = [9,4,6,3,7,7]; //Arrange
    let result = getEvenNumbers(numbers) //Act
    expect(result).toEqual([4,6])
 })

  test("for odd numbers", ()=>{
    let numbers = [9,4,6,3,7,7]; //Arrange
    let result = getOddNumbers(numbers) //Act
    expect(result).toEqual([9,3,7,7])
 })
