// dotenv module
require('dotenv').config();
// MySQL module
const mysql = require('mysql');
// Express module
const express = require('express');
const app = express();
// Static module
app.use(express.static(__dirname));

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'))

app.use(express.json());


const PORT = 3000;

// CONFIGURATION
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});


// SERVER START
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));


const getAllInfos = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
FROM book_mast, author, category, publisher
WHERE book_mast.aut_id = author.aut_id
AND book_mast.cate_id = category.cate_id
AND book_mast.pub_id = publisher.pub_id`;


app.get('/books', (request, response) => {
  conn.query(getAllInfos, (err, data) => {
    if (err) {
      response.status(500).send(err);
    }
    response.status(200).send(data);
  });
});



