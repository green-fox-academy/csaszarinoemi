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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let usedAliases = [];
  res.forEach(element => {
    usedAliases.push(element.alias);
  });   //egy arraybe gyűjtöm a hasznalt alieseket
  console.log(usedAliases);

  let isInUse = usedAliases.includes(aliasEntry.value);
  let p = document.querySelector('p');

  

  if (!isInUse) {
    const postXHR = new XMLHttpRequest();
    postXHR.open('POST', '/api/links');
    postXHR.setRequestHeader('Content-Type', 'application/json');
    postXHR.send(JSON.stringify({
      url: urlEntry.value,
      alias: aliasEntry.value
    }));
    postXHR.onload = () => {
      if(postXHR.status === 200){
        let postResponse = JSON.parse(postXHR.responseText);
        console.log(postResponse);
        p.innerText = `Your URL's alias is : ${aliasEntry.value} and your secret code is: ${postResponse[0].secretCode}`;
        form.reset();
      }
      
    }
  } else if (isInUse) {
    p.innerText = `The alias is already used!`
  }


});
