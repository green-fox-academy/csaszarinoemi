import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//el kell érni a dominókat egyesével és külön arraybe rakni.
//ha a domino második eleme = a domino első elemével akkor rakd be egymás után
//for loopban a foor loop


let domino1 = new Domino(5, 2);
let domino2 = new Domino(4, 6);
let domino3 = new Domino(1, 5);
let domino4 = new Domino(6, 7);
let domino5 = new Domino(2 ,4);
let domino6 = new Domino(7, 1);

let dominoArray1: number [] = Array.from(domino1.values);
let dominoArray2: number [] = Array.from(domino2.values);
let dominoArray3: number [] = Array.from(domino3.values);
let dominoArray4: number [] = Array.from(domino4.values);
let dominoArray5: number [] = Array.from(domino5.values);
let dominoArray6: number [] = Array.from(domino6.values);

const makeOneArray = ([]) => {
let allTheDominoesInOneArray: number[];
allTheDominoesInOneArray.concat(dominoArray1, dominoArray2, dominoArray3, dominoArray4, dominoArray5, dominoArray6);
return allTheDominoesInOneArray;
}
console.log(makeOneArray([]));

/*let dominoList: number [] = [];
for (let i = 0; i <= allTheDominoesInOneArray.length; i++) {
  for (let j = 0; j <= allTheDominoesInOneArray.length; j++){

  }
}


//print(dominoes);*/