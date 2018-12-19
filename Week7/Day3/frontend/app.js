const express = require('express')
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('OK!');
});

app.listen(PORT, () => {
  console.log('Application is listening on port 3000');
})
