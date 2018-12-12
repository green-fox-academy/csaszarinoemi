'use strict'

let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', (e) => {
  setTimeout(() => {
    p.innerText = '2 seconds ellapsed'
  }, 2000 );
})