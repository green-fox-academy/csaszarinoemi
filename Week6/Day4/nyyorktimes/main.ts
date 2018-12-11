'use strict'
export{};

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "e1584a15933e40f0b87d8d377fadf2ce",
  'q': "moonlanding apollo 11"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?e1584a15933e40f0b87d8d377fadf2ce/');
httpRequest.send();