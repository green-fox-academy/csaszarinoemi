// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

export{};

function writeToFile(fileName: string, data: string): void {
  fs.appendFileSync(fileName, data);
}

