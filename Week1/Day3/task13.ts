'use strict';
export{};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let a: number=((24 - currentHours) *60**2);
let b: number=((60 - currentMinutes)*60);
let c: number=(60 - currentSeconds);
console.log( a+b+c );