// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

export { };

function divideByTen(a: number) {
  if (a === 0) {
    throw Error('fail');
  } return a / 10;
}
try {
  console.log(divideByTen(0));
} catch (e) {
  console.log(e.message);
} 