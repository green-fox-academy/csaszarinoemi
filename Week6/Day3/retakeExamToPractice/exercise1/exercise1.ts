import { stringify } from "querystring";

/* Write a method which takes a 2D array / matrix containing letters and returns a text
The method should create the text from the letters found in the matrix
Which letters to select:
from every even row, select the letter found in the even columns
from every odd row, select the letter found in the odd columns
The letters should be concatenated in this order: from left-top to right-bottom
Write 2 different test cases for the method.*/

'use strict'

let myArray: string[][] = [];
let answer: string = '';
const textCreator = (array: string[][]): string => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
        answer += (array[i][j]);
      } else {
        answer = answer;
      }
    }
  }return answer;
}

myArray = [
  ["h", "p", "e"],
  ["k", "l", "a"],
  ["l", "m", "o"]
]

textCreator(myArray);
console.log(answer);