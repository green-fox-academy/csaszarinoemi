const fs = require('fs');

 export function readFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
      console.log('Cannot read file');
      return null;
    }
  }

 export function writeFile(fileName: string, data: string): void {
    if (fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, data);
    } else {
      console.log(`Cannot write file, file doesn't exists`);
    }
  }

 export function appendToFile(fileName: string, data: string): void {
    if (fs.existsSync(fileName)) {
      fs.appendFileSync(fileName, data);
    } else {
      console.log(`Cannot append to file, file doesn't exists`);
    }
  }
