/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/


// const mysteryFunction0 = function(array) {
//   const myFavoriteNum = 7;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === myFavoriteNum) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(mysteryFunction0([1,2,3]));
// console.log(mysteryFunction0([1,2,3,4,5,6]));
//The function checks to see if the number 7 is i the array
//
//The function takes about double the time to print to the console
//0^N


// const mysteryFunction1 = function(array) {
//   index = 4;
//   return array[index];
// }

// console.log(mysteryFunction1([1,2,3]));
// console.log(mysteryFunction1([1,2,3,4,5,6]));
//The function is checking to see what value is in the 4th element of the array and returning that value.
//The function is 0(1)
//Input value is irrelevant because it's searching for a specific index

// var mysteryFunction2 = function(n) {
//   let primes = []
//   for (i = 2; i < n; i++) {
//     let factorFound = false;
//     for (j = 2; j < n; j++) {
//       if (i % j == 0) {
//         factorFound = true;
//       }
//     }
//     if (factorFound === false) {
//       primes.push(i);
//     }
//   }
//   return primes.length;
// }

// console.log(mysteryFunction2(8));
// console.log(mysteryFunction2(27));

// //0(n2)

const mysteryFunction3 = function(array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
}
console.log(mysteryFunction3([1,2,3]));
console.log(mysteryFunction3([1,2,3,4,5,6]));
//This function is checking to see whether or not the array has an even or odd length of indeces.
//0(n)

var mysteryFunction4 = function(string) {
  let eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
      eCount++;
    }
  }
  return eCount;
}
console.log(mysteryFunction4('tarantula'));
console.log(mysteryFunction4('geechees'));
//This function loops through a provided string, checks if the string includes the letter e, and adds it to a counter, and returns the number of e's in the provided string.
//0(n)


var mysteryFunction5 = function(array) {
 return array.sort();
}
console.log(mysteryFunction5([1,2,3]));
console.log(mysteryFunction5([1,2,3,4,5,6]));
//This function sorts information of each index in an array in order
//This depends on implementation
const mysteryFunction6 = function(dict, key) {
  var value = dict[key];
  return value;
}
    mysteryFunction6({color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, "engine");
//This function returns the value of a defined key from an object
//This is 0(1)

const mysteryFunction7 = function(array) {
  // Assume `array` is an array of ints sorted from smallest to biggest
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
}
console.log(mysteryFunction7([3,2,2]));
console.log(mysteryFunction7([6,5,4,3,2,1]));

const mysteryFunction8 = function(dictionary) {
  for(var key in dictionary) {
    var value = dictionary[key];
    if (key == value) {
      return true;
    }
    return false;
  }
}
console.log(mysteryFunction8({red: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, "engine"));
console.log(mysteryFunction8({color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, "engine"));
// This function checks the object and it's 