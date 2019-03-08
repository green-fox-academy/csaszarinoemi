'use strict';
export{};
// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorial( x : number) : number {
    let sum: number = 1;
    for (let a : number = 1; a <= x; a++) {
        sum*=a;
    
    }
    return sum;
}
console.log(factorial(5));

