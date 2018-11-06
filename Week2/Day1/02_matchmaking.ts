'use strict';
export{};

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(matchedlist1: string[], matchedlist2: string[]) {
 let x:any = []
  for (let i = 0; i = matchedlist2.length; i++) {
   if (matchedlist1.length > 0){
   
    x.push(matchedlist1.shift());
    
   } 
x.push(matchedlist2.shift());
  }
  return x;
}

console.log(makingMatches(girls, boys));

export = makingMatches;