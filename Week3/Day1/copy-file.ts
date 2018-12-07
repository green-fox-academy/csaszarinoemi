// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function writeToFile(fileName: string, data: string): void {
  fs.appendFileSync(fileName, data);
}

function copyFile(fileFrom, fileTo): boolean {
  let readedString = readFromFile(fileFrom);
  if (readedString !== null) {
    writeToFile(fileTo, readedString)
    return true;
  } else {
    return false;
  }
}
console.log(copyFile('my-file3.txt', 'my-file.txt'));
