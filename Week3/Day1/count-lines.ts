// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export{};

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    return null;
  }
}
function opensEveryLine(file: string) {
    const everyLine: string = readFromFile(file);
    if (everyLine !== null) {
     return everyLine.split('\r\n').length
    } else {
      return 0;
    }
  }

  console.log(opensEveryLine('my-file.txt'));