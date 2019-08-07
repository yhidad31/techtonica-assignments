// Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

function printVacations(arrOfarrs){
  for (let i = 0; i < arrOfarrs.length; i++){
    for (let j = 1; j < arrOfarrs[i].length; j++){
      console.log(arrOfarrs[i][0] + ' really wants to go to '+ arrOfarrs[i][j]);
    }
  }

}
printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Borneo'], ['Janet', 'London'] ]);

// Follow the prompt for Activity #1, but use this format for the input array instead:

// [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.


// function printVacations(arrOfArrs){
//   for (let i = 0; i < arrOfArrs.length; i++){
//     for (let j = 1; j < arrOfArrs[i].length; j++){
//       console.log(arrOfArrs[i][0] + ' is willing to go to ' + arrOfArrs[i][j].slice(0,-1)+ ' or ' + arrOfArrs[i][j].slice(-1));
//     }
//   }

// }
// printVacations([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]);