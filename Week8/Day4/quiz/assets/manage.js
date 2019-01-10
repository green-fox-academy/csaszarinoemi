'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', '/game');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    load(res);
  }
}
xhr.send();

const load = (data) => {
  
}