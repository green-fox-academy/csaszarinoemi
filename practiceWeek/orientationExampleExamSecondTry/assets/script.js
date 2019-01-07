'use strict'

const xhr = new XMLHttpRequest();

let res = {}; 

xhr.open('GET', '/alias');
xhr.onload = () => {
  if (xhr.status === 200) {
     res = JSON.parse(xhr.responseText);
    console.log(res);
  }
}
xhr.send();

const form = document.querySelector('form');
const urlEntry = document.querySelector('#url');
const aliasEntry = document.querySelector('#alias');
const p = document.querySelector('p');



form.addEventListener('submit', (event) => {
  event.preventDefault();

  let usedAliases = [];
  res.forEach(element => {
    usedAliases.push(element.alias);
  });   //egy arraybe gyűjtöm a hasznalt alieseket
  console.log(usedAliases);

  // const postXHR = new XMLHttpRequest();
  // postXhR.open('POST', '/api/links');
  // postXhR.setRequestHeader('Content-Type', 'application/json');
  // postXhR.send(JSON.stringify({
  //   url: urlEntry.value,
  //   alias: aliasEntry.value
  // }));
  // postXhR.onload = () => {
  //   console.log(JSON.parse(postXhR.responseText));
  // }
})