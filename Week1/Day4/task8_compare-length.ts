'use strict'
export{};
// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList:number[] = [1, 2, 3];
let secondList:number[]=[4, 5];
function comparelist(i:number[], k:number[]) {
    console.log(i.length < k.length);

   }
comparelist(firstList,secondList)