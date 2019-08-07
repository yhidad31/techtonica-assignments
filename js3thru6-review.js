// Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

// Hint: 1 meter equals 39.3701 inches.

// Results
// input	value
// metersToInches(0)	0
// metersToInches(1)	39.3701
// metersToInches(1.5)	59.05515
// metersToInches(15.6)

// function metersToInches(inches){
//   var convertedLength = 0;
// convertedLength = inches * 39.3701;
// return convertedLength;
// }
// console.log(metersToInches(1.5));

// Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

// Results
// input	value
// loopThrough(0)	Nothing displayed
// loopThrough(1)	Message displayed 1 time
// loopThrough(3)	Message displayed 3 times

function loopThrough(numberOx){
  return ('Hello World '.repeat(numberOx));
}
console.log(loopThrough(4));

// [Challenge 3] - Number sum
// Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.

// input	value
// calculateSum(0)	0
// calculateSum(1)	1
// calculateSum(3)	6
// calculateSum(10)	55

function calculateSum(inputNum){
var numbers = 0;
for (i = 0; i <= inputNum; i++){
 numbers = numbers + i;
}
console.log(numbers);
}
calculateSum(3);

// [Challenge 4] - FizzBuzz
// Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(input){
for (i = 0; i <= input; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('Fizz');
  }else if (i % 5 === 0){
    console.log('Buzz');
  }else if (i % 3 === 0){
    console.log('FizzBuzz');
  }else{
    console.log(i);
  }
}
}
fizzBuzz(16);


// Calculate Factorial Number
// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

// For example, the value of 3 factorial, is 6, which can be calculated by:

// 3 * 2 * 1
// The value of 10 factorial, for example, can be calculated by:

// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
//recursive fxn evauluates the input & based on the condition, calls itself w a modified input
//recurision - you get input & it puts it back in to the first fxn until condition is exited?

function calculateFactorial(x){ 
if (x === 0)
{
  return 1;
}
return x * calculateFactorial(x-1);
//return 10 * 9 * 8...2*1
}
console.log(calculateFactorial(10));

// // [Challenge 6] Switch Statements
// // Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// Results
// sleep_in(False, False) → True

// sleep_in(True, False) → False

// sleep_in(False, True) → True

function sleep_in(weekday,vacation){
switch(true){
case weekday !== true || vacation === true:
  console.log("True");
  break;
default:
  console.log("False");

}
}
sleep_in(false, false);
sleep_in(true, false);
sleep_in(false, true);

// [Challenge 7] Accessing Arrays
// Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

// Results
// common([1, 2, 3], [7, 3]) → True

// common([1, 2, 3], [7, 3, 2]) → False

// common([1, 2, 3], [1, 3]) → True

function common(a,b){
if (a[0] === b[0]|| a[a.length-1] === b[b.length-1]){
  console.log(true);
}else{
  console.log(false);
}

}

common([1, 2, 3], [7, 3]);
common([1, 2, 3], [7, 3, 2]);
common([1, 2, 3], [1, 3]);

// [Challenge 9] Object Keys and Values
// Create an object with two key-value pairs.

// Log that object to the console.

// Delete the first key-value pair in the object.

// Log that object to the console again. The first key-value pair should be gone.

var capreseSalad = {cheese:"mozzarella", herb:"basil", fruit:"tomato"};
console.log(capreseSalad);
delete capreseSalad.cheese;
console.log(capreseSalad);

// [Challenge 9] Mutating Objects
// Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

// Create a function that accepts the array of objects as an argument.

// Print the value of the second key in each object to the console. Use dot-notation to access the values.

// After printing the values in step 3, change the values of the second key in every object to something new.

// Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.