const express = require('express')
const app = express();
const path = require('path');


const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json()); //body parser

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      'received': input,
      'result': input * 2
    });
  } else {
    res.json({ 'error': 'Please provide an input!' });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;
  if (name, title) {
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (title) {
    res.json({ "error": "Please provide a name!" });
  } else if (name) {
    res.json({ "error": "Please provide a title!" });
  }
})

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.json({
      "appended": `${appendable}a`
    });
  } else {
    res.json(404); //vagy res.status(404).send
  }
})

app.post("/dountil/:action", (req, res) => {
  const action = req.params.action;
  const numUntil = req.body.until;

  if (action === 'sum') {
    res.json({
      "result": summing(numUntil)
    });
  } else if (action === 'factor') {
    res.json({
      "result": factoring(numUntil)
    }); 
  } else {
    res.json({
      "error": "Please provide a number!"
    })
  }
})


const summing = (numUntil) => {
  let result = 0;
  for (let i = 0; i <= numUntil; i++) {
    result += i;
  } return result;
}



const factoring = (numUntil) => {
  let result = 1;
  for (let i = 1; i <= numUntil; i++) {
    result *= i;
  } return result;
}
console.log(factoring());

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})
