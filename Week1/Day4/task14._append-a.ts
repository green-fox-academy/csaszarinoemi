'use strict'
export{};

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];
let changedlist = animals.map(function(element) {
    return element + "a"
    }
)
console.log(changedlist)