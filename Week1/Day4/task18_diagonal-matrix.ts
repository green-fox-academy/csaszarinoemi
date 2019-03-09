'use strict';
export{};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function matrixMaker(input:number):number[][]{
  let output:number[][] = []
  for(let i = 0; i < input; i++){
    output[i]=[];
    for (let j = 0; j < input; j++){
      if (j+i===input-1){
        output[i][j]=1;
      } else {
        output[i][j]=0
      }
    }
  } return output
}
