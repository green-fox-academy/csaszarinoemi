function uniques(matrix: number[][]): number[] {
  let uniqueArray: number[] = [];
  for (let i: number=0; i < matrix.length; i++) {
    for (let f: number=0; f < matrix[i].length; f++) {
      if (uniqueArray.indexOf(matrix[i][f]) === -1) {
        uniqueArray.push(matrix[i][f]);
      }
    }
  } 
  return uniqueArray;
}

let input: number[][] = [[1, 1], [4, 2]];
console.log(uniques(input));