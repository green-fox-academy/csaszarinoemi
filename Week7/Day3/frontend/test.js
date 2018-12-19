let numUntil = 4;

const factoring = () => {
  let result = 1;
    for (let i = 1; i <= numUntil; i++) {
      result *= i;
    } return result;
  } 
console.log(factoring());