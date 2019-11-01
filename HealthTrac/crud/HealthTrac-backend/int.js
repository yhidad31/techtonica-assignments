function madLibs(str){
  let newArr = str.split(' ');
 for (let i = 0; i < newArr.length; i++){
   newArr[i] = newArr[i].replace('__noun__', 'dog')
  } 
  return newArr.join(' ');
 }

 console.log(madLibs('Her nice __noun__ ran to the pond'));
