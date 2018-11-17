// Create a method that decrypts reversed-lines.txt

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function decrypts(fileName) {
let decryptedText: string [] = readFromFile(fileName).split('').reverse();
return console.log(decryptedText.join(''));
}
decrypts('reversed-lines.txt');
