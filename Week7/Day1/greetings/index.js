const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    title: `Welcome back ${req.query.name||'Guest!'}!`
  }
  );

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});