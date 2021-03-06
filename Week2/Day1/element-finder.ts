'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
/*function containsSeven(list: number[]) {
  for (let i = 0; i <= list.length - 1; i++) {
    if (list.indexOf(i) === -1) {
      return "Nooooo"
    } else {
      return "Hoorray"
    }
  }
} */

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(list: number[]) {
  if (list.includes(7)) {
    return "Hoorray"
  } else {
    return "Nooooo"
  }
}
console.log(containsSeven(numbers));

export = containsSeven;