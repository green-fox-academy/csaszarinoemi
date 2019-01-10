'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use('/details/assets', express.static('assets'));

app.use(express.json());
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); })
app.get('/manage', (req, res) => { res.sendFile(path.join(__dirname, 'manage.html')); })

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

const randomNumberGenerator = () => {
  let RandomNumber = Math.floor((Math.random() * 10) + 1);
  return RandomNumber;
}

app.get('/game', (req, res) => {
  let currentRandomNumber = randomNumberGenerator();

  const sql = `SELECT * FROM questions WHERE id=${currentRandomNumber};`;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    conn.query(`SELECT question_id, id, answer, is_correct FROM answers WHERE question_id=${currentRandomNumber};`, (err, dataQuestion) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        "id": data[0].id,
        "question": data[0].question,
        "answers": dataQuestion
      });
    });
  });
});

app.get('/questions', (req, res) => {
  const sql = 'SELECT * FROM questions;';
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



app.post('/questions', (req, res) => {

  const { yourQuestion, answer1, answer2, answer3, answer4, answer1radio, answer2radio, answer3radio, answer4radio } = req.body;
  const sqlQuestion = `INSERT INTO questions (question) VALUES ("${yourQuestion}");`;
  //let idCounter = 11;
  conn.query(sqlQuestion, (err, data) => {

    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error at sqlQestion'
      });
      return;
    }

    const sqlAnswers = `INSERT INTO answers (question_id, answer, is_correct) VALUES ('${data.insertId}', '${answer1}', '${answer1radio}'),('${data.insertId}', '${answer2}', '${answer2radio}'),('${data.insertId}', '${answer3}', '${answer3radio}'),('${data.insertId}', '${answer4}', '${answer4radio}');`
    conn.query(sqlAnswers, (err, dataAnswers) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error at sqlAnswers'
        });
        return;
      }
      res.json({
        data,
        dataAnswers,
        message: 'Succesfully added question'
      });
    });
  });
});

app.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  const sqlQuestion = `DELETE FROM questions WHERE id=${id};`;
  conn.query(sqlQuestion, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    const sqlAnswers = `DELETE FROM answers WHERE question_id=${id};`;
    conn.query(sqlAnswers, (err, data) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'Internal server error'
        });
        return;
      }
      res.json({
        message: "Succesfully deleted"});
    });
  });
});

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`);
});