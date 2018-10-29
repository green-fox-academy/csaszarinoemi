'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let x: string = "*"
let y: string = " "
for (let a: number = 1; a <= lineCount; a++) {
    if ( a === 1) {
        console.log((y.repeat(3)) + x);
    } else if ( a === 2) {
        console.log((y.repeat(2)) + (x.repeat(a*2-1)));
    } else if ( a === 3) {
        console.log((y.repeat(1)) + (x.repeat(a*2-1)));
    } else if ( a === 4) {
        console.log((x.repeat(a*2-1)));
    } else if ( a === 5) {
        console.log((y.repeat(1)) + (x.repeat(a)));
    } else if ( a === 6) {
        console.log((y.repeat(2)) + (x.repeat(a/2)));
    } else {
        console.log((y.repeat(3)) + (x.repeat(a%3)));
    }

}
        
    
    
