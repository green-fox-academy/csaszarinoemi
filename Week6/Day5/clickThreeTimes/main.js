'use strict'

let button = document.querySelector('button');
let p = document.querySelector('p');

let counter = 0;

const clickThreeTimes = (e) => {
 counter++;
 console.log(counter);
 if (e.timeStamp < 5000) {
   button.removeEventListener('click', clickThreeTimes);
 } else if (counter === 3) {
   p.innerText = '5 seconds ellapsed and clicked 3 times'
 }
}


button.addEventListener('click', clickThreeTimes);
