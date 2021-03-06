// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

export{};
const fs = require('fs');

function writeToFile(fileName: string, data: string): void {
  try {
  fs.appendFileSync(fileName, data);
} catch(e) {
  console.log('Unable to write file: my-file.txt');
  return null;
}
}
writeToFile('my-file.txt', '\r\nNoémi');
