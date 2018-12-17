const express = require('express');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/cica', (req, res) => {
  res.json({
    cica: 'cica'
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
}); 
