'use strict'

const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('Cannot read file');
    return null;
  }
}

function writeFile(fileName: string, data: string): void {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, data);
  } else {
    console.log(`Cannot write file, file doesn't exists`);
  }
}


const buildingUsageCalculator = (inPutFileName: string) => {
  let counter1: number = 0;
  let counter2: number = 0;
  let content = readFile(inPutFileName);
  let contentArray: string[] = [];
  let contentArray2: string[][] = [];
  content.split(`\r\n`).forEach(e => {
    contentArray = (e.split(';'));
    contentArray2.push(contentArray);
  })
  contentArray2.forEach(e => {
    e.forEach(e => {
      if (e === 'student'){
        counter1++;
      } else if (e === 'mentor') {
        counter2++;
      }
    })
  }) 
writeFile('answerFile.txt', `Building Usage \r\nStudents: ${counter1} \r\nMentors: ${counter2}`);
}

buildingUsageCalculator('usage.csv');