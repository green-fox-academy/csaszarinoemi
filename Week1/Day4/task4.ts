'use strict'
export{};
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
function sum(x : number): number {
    let b: number =  0;
   for (let a:number = 1; a <= x; a++ ) {
      b+=a;
   } 
   return b
}
console.log(sum(7));