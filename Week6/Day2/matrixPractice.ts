function matrixMaximazer(matrix1: number[][], matrix2: number[][]) {
  let result: number[][] = [];
  for (let i: number = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let f: number = 0; f < matrix1.length; f++) {
      if (matrix1[i][f] > matrix2[i][f]) {
        result[i][f] = matrix1[i][f];
      } else {
        result[i][f] = matrix2[i][f]
      }
    }
  } return result;
}

let myMatrix1 = [[2, 1], [0, 1]];
let myMatrix2 = [[0, 3], [-1, 1]];

console.log(matrixMaximazer(myMatrix1, myMatrix2));