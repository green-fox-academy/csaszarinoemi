'use strict';

let h1 = document.querySelector('h1');
window.addEventListener('keyup', (e) => {
  console.log(e.keyCode)
  h1.innerText = `Last pressed key code is: ${e.keyCode} `
})