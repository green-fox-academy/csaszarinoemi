// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.

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

function copyIP(fileName) {
  let readedString = readFromFile(fileName);
  let IP: any[] = readedString.split('\r\n');
  let IPArray: any[] = [];
  let FinalIPArry: any[] = [];
  for (let i = 0; i < IP.length; i++) {
    IPArray.push(IP[i].split(' '));
    FinalIPArry.push(IPArray[i][8]);
  }
  return FinalIPArry
}
copyIP('log.txt');

// Write a function that returns the GET / POST request ratio.

let getAndPostArray: any[] = [];
function getPost(fileName) {
  let readedString = readFromFile(fileName);
  let getPostTogether: any[] = readedString.split('\r\n');
  let getPostArray: any[] = [];

  for (let i = 0; i < getPostTogether.length; i++) {
    getPostArray.push(getPostTogether[i].split(' '));
    getAndPostArray.push(getPostArray[i][11]);
  } return getAndPostArray
}
getPost('log.txt');

function getPostLists(Array) {
  let ratio: number
  let getArray: any[] = [];
  let postArray: any[] = [];
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === 'GET') {
      getArray.push(Array[i]);
    } else {
      postArray.push(Array[i]);
    }
  } ratio = getArray.length / postArray.length

  console.log(ratio);
}
getPostLists(getAndPostArray);




