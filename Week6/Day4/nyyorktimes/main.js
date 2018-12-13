'use strict'


let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon&landing&apollo&11&api_key=e1584a15933e40f0b87d8d377fadf2ce");
httpRequest.send();

httpRequest.onreadystatechange = () => {

  if (httpRequest.readyState === XMLHttpRequest.DONE) {

    if (httpRequest.status === 200) {

      const myResponse = JSON.parse(httpRequest.responseText).response.docs;
      const myBody = document.querySelector('body');
      console.log(myResponse);

      for (let i = 0; i < myResponse.length; i++) {

        if (myResponse[i].document_type !== 'topic') {

          let myUl = document.createElement('ul');
          let headline = document.createElement('li');
          let snippet = document.createElement('li');
          let publicationDate = document.createElement('li');

          myBody.appendChild(myUl);
          myUl.appendChild(headline);
          myUl.appendChild(snippet);
          myUl.appendChild(publicationDate);



          let myATag = document.createElement('a');
          myATag.setAttribute('href', myResponse[i].web_url)
          myATag.innerText = myResponse[i].headline.main;

          headline.appendChild(myATag);

          snippet.innerText = myResponse[i].snippet;

          publicationDate.innerText = myResponse[i].pub_date.slice(0, 10);
        }
      }

    }
  }
}
