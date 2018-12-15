'use strict'

window.onload = function () {

  const allPost = document.querySelector(".allPosts");


  const apiKey = "e1584a15933e40f0b87d8d377fadf2ce";
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${apiKey}`;
  /* Set the AJAX */

  const sendHttpRequest = (url, method, callback) => {
    const xmlRequest = new XMLHttpRequest();
    xmlRequest.open(method, url);
    xmlRequest.onload = () => {
      if (xmlRequest.status === 200) {
        callback(JSON.parse(xmlRequest.responseText));
      }
    }
    xmlRequest.send();
  }
  sendHttpRequest(apiUrl, 'GET', (response) => {
    let data = response.results;
    console.log(data);
    litsPosts(data);
  });

  const litsPosts = (data) => {
    data.forEach(element => {
      const post = document.createElement('div');

      post.classList.add('post');

      const article = document.createElement('div');
      article.classList.add('article')

      const titleLink = document.createElement('a');
      titleLink.classList.add('titleLink');
      titleLink.setAttribute("href", element.url)
     

      const title = document.createElement('h2');
      title.classList.add('title');
      title.textContent = `${element.title}`;

      article.appendChild(titleLink);
      titleLink.appendChild(title);
      
      const text = document.createElement('p');
      text.classList.add('text');
      text.textContent = `${element.abstract}`;

      article.appendChild(text);

      const submiteDate = document.createElement('p');
      submiteDate.classList.add('submiteDate');
      submiteDate.textContent = `${element.published_date.slice(0, 10)}`;

      article.appendChild(submiteDate);

      const submiteBy = document.createElement('span');
      submiteBy.classList.add('submiteBy');
      submiteBy.textContent = `${element.byline}`;

      article.appendChild(submiteBy);

      const comments = document.createElement('a');
      comments.setAttribute("href", '');
      comments.classList.add('comments');
      comments.textContent = `${Math.floor((Math.random() * 200) + 1)} comments`
      article.appendChild(comments);

      const modify = document.createElement('a');
      modify.setAttribute("href", '')
      modify.classList.add('modify');
      modify.textContent = "Modify"
      article.appendChild(modify);

      const remove = document.createElement('a');
      remove.setAttribute("href", '');
      remove.classList.add('remove');
      remove.textContent = "Remove"
      article.appendChild(remove);


      const votingButton = document.createElement('div');
      votingButton.classList.add('votingButton')

      const up = document.createElement('img');
      up.classList.add('up');
      up.setAttribute('src', "upvote.png");

      const voteNumber = document.createElement('p');
      voteNumber.classList.add('voteNumber');
      voteNumber.innerText = `${Math.floor((Math.random() * 200) + 1)}`

      const down = document.createElement('img');
      down.classList.add('down');
      down.setAttribute('src', "downvote.png");


      votingButton.appendChild(up);
      votingButton.appendChild(voteNumber);
      votingButton.appendChild(down);




      allPost.appendChild(post);
      post.appendChild(votingButton)
      post.appendChild(article)



      console.log(allPost);

    });
  }
}






/*
const apiKey = "e1584a15933e40f0b87d8d377fadf2ce";
const url = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;
const method = "GET";

const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}

let posts;
const getPosts = sendHttpRequest(url, method, (response) => posts = response);
console.log(posts); */
