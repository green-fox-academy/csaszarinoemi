'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(express.json());
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); })

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

conn.connect(err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to database');
});

app.get('/alias', (req, res) => {
  const sql = 'SELECT * FROM atnevez;';
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  });
});

const secretCodeGenerator = () => {
  let secretNumber = Math.floor(1000 + Math.random() * 9000);
  return secretNumber;
}
app.post('/api/links', (req, res) => {
  const currentSecretNumber = secretCodeGenerator();

  const { url, alias } = req.body;
  if (
    url === undefined || url === '' ||
    alias === undefined || alias === '') {
    res.json({
      message: 'All fields are required'
    });
  } else {
    const sql = 'SELECT alias from atnevez;';
    conn.query(sql, (err, aliasArr) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      if (aliasArr.find(data => data.alias === alias)) {
        res.status(400).json({
          error: 'Error 400, alias is already used'
        });
      } else {
        conn.query('INSERT INTO atnevez (url, alias, secretCode) VALUES (?, ?, ?);', [url, alias, currentSecretNumber], (err, data) => {
          if (err) {
            console.log(err.message);
            res.status(500).json({
              error: 'Internal server error'
            });
            return;
          }
          res.json({
            message: 'Succefully added'
          });
        });
      }
    });
  }
});


app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});


