'use strict';
export{};
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
let numList: number [] = [3, 4, 5, 6, 7];
//console.log(numList.reverse());


 let newlist = []
for (let x: number =(numList.length-1) ; x >= 0; x-- ) {
  newlist.push(numList[x]);
} 
console.log(newlist);

//let reversedlist = numList.map(numList.reverse());
//console.log(reversedlist);
