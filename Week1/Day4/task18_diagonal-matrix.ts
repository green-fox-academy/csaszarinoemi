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

function matrixMaker(input:number):void{
  let output:number[][] = []
  for(let i = 0; i < input-1; i++){
    output[i]=[];
    for (let j = 0; j < input-1; j++){
      if (j=i){
        output[i][j]=1;
      } else {
        output[i][j]=0
      }
    }
  } console.log(output)
}

matrixMaker(4);