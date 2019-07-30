function vowelsAndConsonants(word){
  let vowels = ['a','e','i','o','u'];
  let wordsVowels = [];
  let consonants = [];
  //keep all variables here for scope
for (let i = 0; i < word.length; i++){
//above loop thru word
// console.log(vowels.includes());
  if(vowels.includes(word[i])){
//if word of [i] which is at index 0 is in vowels
//if i is in vowels array
  wordsVowels.push(word[i]);
  //to push to new array, array_name.push(array)
  // console.log(wordsVowels);
  } else {
  consonants.push(word[i]);
  }

  }
  for (let j = 0; j < wordsVowels.length; j ++){
  console.log(wordsVowels[j]);
} for (let k = 0; k < consonants.length; k++){
  console.log(consonants[k]);
}
}

vowelsAndConsonants('javascriptloops');
