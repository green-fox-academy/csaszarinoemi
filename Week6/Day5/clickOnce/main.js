
'use strict'

let button = document.querySelector('button');

// button.addEventListener('click', (e) => {
//   console.log(Date.now());
//   button.setAttribute('disabled', '');
  
// });
let counter = 0;  
button.addEventListener('click', (e) => {
  

  console.log(Date.now());
  counter++;

  if (counter > 0){
    button.setAttribute('disabled', '')
  }

})
  

