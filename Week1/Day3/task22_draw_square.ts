'use strict';
export { };

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
let x: string = '%';
let y: string = '';
for (let a: number = 1; a <= lineCount; a++) {
    if (a === 1) {
        console.log(x.repeat(6));
    } else if (a > 1 && a < lineCount) {
        console.log((x) + (y.repeat(4)) + x);
    } else {
        console.log(x.repeat(6));
    }
}