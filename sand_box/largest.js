let numbers = [15, 4, 27, 76, 32, 41]; 

let largest = numbers[0];
let secondLargest = 0;

	for(let count = 0;  count < numbers.length; count++){
		if(largest < numbers[count]){
		   largest = numbers[count];		
		} 
    }	
	for(let index = 0;  index < numbers.length; index++){
	if (numbers[index] > secondLargest && numbers[index] != largest){
		secondLargest = numbers[index];
        }
    }

    console.log("The largest number is " + largest);
    console.log("The second largest number is " + secondLargest);
	
