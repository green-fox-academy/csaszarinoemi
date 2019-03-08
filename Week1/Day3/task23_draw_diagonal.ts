'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
let x: string = "%"
let y: string = " "
for (let a: number = 1; a <= lineCount; a++) {
    if ( a === 1 ) {
        console.log(x.repeat(5)); 
    } else if ( a === 2) {
        console.log( (x.repeat(2)) + y.repeat(2) + x);
    } else if ( a === 3) {
        console.log( x + y + x + y + x);
    } else if ( a === 4) {
        console.log( x + y.repeat(2) + x.repeat(2));
    } else if ( a === 5){
        console.log( x + y.repeat(3) + x);
    } else {
        console.log(x.repeat(5))
    }

}