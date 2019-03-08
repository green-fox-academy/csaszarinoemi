'use strict'
export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
function printParams(...i ){
    
    for ( let x = 0; x< i.length; x++){
        console.log(i[x]);
    }
}
printParams(1,2,5,"valami");
