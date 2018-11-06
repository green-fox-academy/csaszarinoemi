'use strict';
export{};

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

function candiesAdd(list: any[]) {
  let candiesNum = 0;
 for (let i = 0; i < list.length; i++) {
   candiesNum = candiesNum + list[i].candies;
 }
 console.log("Students has " + candiesNum + " candies altogether");
}
candiesAdd(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function ageAdd(list: any[]) {
  let ageadded = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].candies < 5) {
      ageadded = ageadded + list[i].age;
    }
  }console.log("Students age added: " + ageadded);
} 
ageAdd(students);
