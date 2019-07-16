// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
// var animal = "frog";
// global variable
// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"
// function animalResponse(animal){
//   if (animal === 'lion') {
//   console.log ("I'm scared!");
// } else if (animal === 'dog') {
//   console.log('So cute!');
// } else if (animal === 'frog') {
//   console.log('Ribit ribbit');
// } else {
//   console.log('Just another animal');
//   }
// }
// animalResponse('tarantula')


// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 

// var person1Age = 16;
// var person2Age = 14;


// function doWeHaveAdults(person1Age,person2Age){
//   if (person1Age < 18 && person2Age < 18) {
//   console.log ("You are both children");
// } else {
//   console.log('At least one adult is here');
//   }
// }

// doWeHaveAdults(18,16);


// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)


// for (let i = 20; i >= 10; i--) {
//     console.log(i);
// }

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)

// var n = 0;

// while (n <= 50) {
//   n+=5;
// console.log(n)
// }

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors

// var flavors = ["Peanut Butter Curry", "Blueberry Boy Bait", "Heres Your Damn Strawberry"];


// Exercise 7. Update the second element of the array to be a different value

// flavors[1]="POG";

// console.log(flavors);


// Exercise 8. Add 2 more items to the array
//  flavors.push('Strawberry Szechuan Sorbet','Chocolate Smoked Sea Salt');

//  console.log(flavors);

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
// var x = 0
// var y = 0
// var z = 0
// function multiply (x,y,z){
//   console.log(x*y*z)

// }
// multiply(3,3,3)

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even



// function takeInteger(number){
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//     console.log(i + ' even');
//     } else {
//     console.log(i + ' odd');
//     }
//   }
// }
// takeInteger(9);




// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)

pet = {animal:"tarantula", age:6}


// Exercise 12. Print the pet's age
 console.log(pet.age)
// console.log(pet['age'])

// Exercise 13. Update pet's age to be a different value
 pet['age'] = 7
 console.log(pet)

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String - a string holds text variables
// Number - numbers, floats, integers
// Boolean - True or False
// Array - can hold many values
// Object - A collection of data
// undefined - empty, or value unknown

//Exercise 15 Add. a new file to the $PATH environmental variable

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 


// How are the devices on the internet physically connected to each other?
// How is information physically transmitted from device to device?
// How does one device find another it’s trying to communicate with?
// What methods do devices on the internet use to communicate?

// Internet devices are physically connected to each other through wires and servers.

// Information is physically transmitted from device to device through light, electricity and copper wires.

// Devices trying to communicate with each other find each other through ethernet hardware which takes packets of information, transmits and receives them.

// Methods devices use to communicate include TCP/IP protocols, which tell packets of information to go; HTTP and HTTPS are examples of TCP/IP protocols.

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.

// function takeString(word){
//   var counter = 0
//   for (let i = 0; i < word.length; i++){
//     if (word[i] === 'a'){
//       counter = counter + 1
//     }
//   }
//   console.log(counter)
// }
// takeString("Tarantula")

// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.