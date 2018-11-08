'use strict';
export{};

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let beginning: string = "My todo:";
let end: string = " - Download games"
let indention: string = "   ";
let veryEnd: string = " - Diablo";

console.log(beginning.concat(todoText, end, indention, veryEnd));

