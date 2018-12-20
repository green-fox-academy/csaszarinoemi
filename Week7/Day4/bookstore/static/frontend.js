'use strict'

let httpRequest = new XMLHttpRequest();

const HOST = '/books'

httpRequest.open('GET', HOST);
httpRequest.send();

httpRequest.onload = () => {
  if (httpRequest.status === 200) {
    const myResponse = JSON.parse(httpRequest.responseText)

    const myTable = document.createElement('table');
    myTable.classList.add('myTable');

    const tr = document.createElement('tr');
    const thBookName = document.createElement('th');
    const thAutName = document.createElement('th');
    const thCateDescrip = document.createElement('th');
    const thPubName = document.createElement('th');
    const thBookPrice = document.createElement('th');

    thBookName.textContent = 'Book Title';
    thAutName.textContent = `Author's name`;
    thCateDescrip.textContent = 'Category';
    thPubName.textContent = 'Publisher';
    thBookPrice.textContent = 'Price';

    tr.appendChild(thBookName);
    tr.appendChild(thAutName);
    tr.appendChild(thCateDescrip);
    tr.appendChild(thPubName);
    tr.appendChild(thBookPrice)

    document.body.appendChild(tr);

    for (let i = 0; i < myResponse.length; i++) {
      
      const tr = document.createElement('tr');
      const tdBookName = document.createElement('td');
      const tdAutName = document.createElement('td');
      const tdCateDescrip = document.createElement('td');
      const tdPubName = document.createElement('td');
      const tdBookPrice = document.createElement('td');

      tdBookName.textContent = myResponse[i].book_name;
      tdAutName.textContent = myResponse[i].aut_name;
      tdCateDescrip.textContent = myResponse[i].cate_descrip;
      tdPubName.textContent = myResponse[i].pub_name;
      tdBookPrice.textContent = myResponse[i].book_price;

      tr.appendChild(tdBookName);
      tr.appendChild(tdAutName);
      tr.appendChild(tdCateDescrip);
      tr.appendChild(tdPubName);
      tr.appendChild(tdBookPrice);

      document.body.appendChild(tr);
    }

  }
}
