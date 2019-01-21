const express = require('express')
const app = express();

app.use(express.json());


app.post('/array', (req, res) => {
  const { what } = req.body;
  const { numbers } = req.body;
  
  switch (what) {
    case 'sum' : {
      res.json({
        "result": summing(numbers)
      });
      break;
    } case 'multiply' : {
      res.json({
        "result": multipling(numbers)
      });
      break;
    } case 'double' : {
      res.json({
        "result": doubling(numbers)
      });
      break;
    } default : {
      res.json({
        "error": "Please provide what to do with the numbers!"
      })
    }
  }
  
})


const summing = (nums) => {
  return nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
}

const multipling = (nums) => {
  let result = 1;
  for (let i = 0; i < nums.length-1; i++){
    result*= nums[i];
  } return result;
}

const doubling = (nums) => {
  let doubles =  nums.map(function(num) {
    return num * 2;
  }); return doubles;
}

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})