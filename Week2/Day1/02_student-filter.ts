'use strict';
export {};

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function WhoHasGotMoreCandies(list:any[]) {
  let nameslist: any[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].candies > 4) {
      nameslist.push(list[i].name);
    }
  } console.log("Students who has got more than 4 candies " + nameslist)
} WhoHasGotMoreCandies(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies(list: any[]) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i].candies
  } 
  let average = sum / list.length;
  console.log("Candies average " + average);
} 
averageCandies(students);