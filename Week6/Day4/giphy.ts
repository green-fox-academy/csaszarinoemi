'use strict'

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=wow&api_key=PJKcR4HdhmZ4DAXkaU6cRiD6mZlSdyW1&limit=16');
httpRequest.send();

httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        const myBody = document.querySelector('body');
        for (let i = 0; i < response.data.length; i++){
        let imageIWillSee = document.createElement('img')
        myBody.appendChild(imageIWillSee);
        imageIWillSee.setAttribute('src',(response.data[i].images.original_still.url));
        imageIWillSee.onclick = () =>{
          imageIWillSee.setAttribute('src',(response.data[i].images.original.url));
        }
        }
      }
    }
  };
