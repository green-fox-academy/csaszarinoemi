// Create a method that decrypts duplicated-chars.txt

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

function decrypts(fileName){
  let cryptedFile: string []= readFromFile(fileName).split('');
let secondArray: string[] = []
  for (let i = 0; i <= cryptedFile.length; i++) {
    if (i % 2 !== 0) {
      secondArray.push(cryptedFile[i]);
    } 
  } 
  return  console.log(secondArray.join(''));
} 
decrypts('duplicated-chars.txt');
