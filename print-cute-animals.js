function printCuteAnimals(myArr){
  if(Array.isArray(myArr)){
    console.log(myArr);
    console.log(myArr.length);
    console.log(myArr.concat('tarantula'));
    console.log(myArr.concat('tarantula').length);
    console.log(myArr.pop());
    console.log(myArr.pop().length);
  }
return myArr;
}
var array = ['tuna','sloth','rabbit'];
printCuteAnimals(array);
// .push() & .pop METHODS