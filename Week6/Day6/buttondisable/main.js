'use strict'

let signUp = document.querySelector('.signUp');
let iLoveCats = document.querySelector('.iLoveCats');
let form = document.querySelector('form');
let favouriteAnimal = form.pet;
let answer = form.facts;
let button = document.querySelector('.buttons')
//let iLoveCatsButton = form.iLoveCats;
//let signUpButton = form.signUp;




form.addEventListener('change', (e) => { //olyan mint a click, csak itt csak a gomb helyét veszi figyelembe
  console.log('cica');
  if (favouriteAnimal.value === 'Dog' || favouriteAnimal.value === 'Cat' || (favouriteAnimal.value === 'Viktor the goldfish' && answer.value === 'No')) {
    signUp.removeAttribute('disabled');
  } else {
    signUp.setAttribute('disabled', '')
  }

  if (answer.value == 'Yes' ){
    iLoveCats.removeAttribute('disabled');
  } else {
    iLoveCats.setAttribute('disabled', '')
  }

  
})

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'iLoveCats' && answer.value == 'Yes'){
    console.log('valami');
    alert("Thank you, you've successfully signed up for cat facts");
  }

  if (e.target.className === 'signUp' && (favouriteAnimal.value === 'Viktor the goldfish' && answer.value === 'No')){
    alert("Sigh, we still added you to the cat facts list");
  }
})


/*form.addEventListener('click', (e) => {
  console.log(favouriteAnimal);
  console.log(answer);
  if (e.target.value === 'Viktor the goldfish' && e.target.value === 'Yes') {
    iLoveCats.setAttribute('disabled', '')
    signUp.removeAttribute('disabled');
  } else if (e.target.value === 'Viktor the goldfish' && e.target.value === 'No') {

    iLoveCats.setAttribute('disabled', '')
    signUp.removeAttribute('disabled');

  } else if ((e.target.value === 'Dog' || e.target.value === 'Cat') && e.target.value === 'Yes') {

    iLoveCats.removeAttribute('disabled');
    signUp.removeAttribute('disabled');

  } else if (e.target.value === 'Dog' || e.target.value === 'Cat') {

    signUp.removeAttribute('disabled');

  } else if (e.target.value === 'Viktor the goldfish') {

    signUp.setAttribute('disabled', '')
  }
})*/


