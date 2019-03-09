'use strict'

const URL = "https://swapi.co/api/"

let xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.send();

xhr.onreadystatechange = () => {

  if (xhr.readyState === XMLHttpRequest.DONE) {

    if (xhr.status === 200) {

      const myResponse = JSON.parse(xhr.responseText)
      console.log(myResponse)
    }
  }
}