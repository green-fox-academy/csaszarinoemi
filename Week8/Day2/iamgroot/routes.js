const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const {message} = req.query
  if (message === undefined || message === "") {
    res.status(500).json({
      error: 'I am Groot!'
    });
    return;
  }
  res.status(200).json({
    "received": message,
    "translated": "I am Groot!"
  });
});

module.exports = app;