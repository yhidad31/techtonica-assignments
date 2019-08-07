// For each of the exercises below:

// Write the function
// Think about what different tests you would need to make sure your function is correct. Write calls to the function to exercise those cases. Next to each call, write a comment explaining why you tested that case.
// Exercises:

// 1. A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.

function twoNumbers(num1,num2){
  var answer = '';
  if (num1 > num2){
    answer = true;
  }
  else {
    answer = false;
  }
  return answer;
  }
  console.log(twoNumbers(4,5));
  console.log(twoNumbers(-9,5));
  console.log(twoNumbers(9,5));
  console.log(twoNumbers(5.1,5));
  // 2. A function that takes in an array of numbers, and returns the third number in the array.
  function returnArray(arr){
    return [arr[2]];
  }
  returnArray([5,18,2,9]);
  console.log(returnArray[3,2,31,2]);
  // 3. A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).
  function targetNum (min, max, target){
    isBetween = '';
    if (target > min && target < max){
      isBetween = true;
    } else{
      isBetween = false;
    }
    return isBetween;
  }
  console.log(targetNum(1,5,4));
  console.log(targetNum(2,3,9));
  console.log(targetNum(8,3,78));
  
  // 4. A function that takes in a number, and prints the word "Hello" that many times.
  function helloX(howManyTimes){
    var hello = 'Hello ';
    console.log(hello.repeat(howManyTimes));
  }
  helloX(4);
  helloX(78);