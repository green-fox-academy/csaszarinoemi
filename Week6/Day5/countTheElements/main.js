'use strict'

const ils = document.querySelectorAll('li');
console.log(ils);
const result = document.querySelector('.result');

const button = document.querySelector('button');
const countTheElement = () => {
result.innerHTML = `We have ${ils.length} items in the list`;
  
};

button.addEventListener('click', countTheElement);