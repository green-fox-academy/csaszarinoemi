import { Animal } from "./animal";
import { Farm } from "./farm";

/*Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal */


let moa = new Animal('moa');
let giraffe = new Animal('giraffe');
let kiwi = new Animal('kiwi');
let emu = new Animal('emu');
let elephant = new Animal('elephant');



moa.play();
giraffe.drink();
giraffe.drink();
giraffe.drink();
elephant.drink();
elephant.drink();

let farmaholelunk = new Farm();

farmaholelunk.breed(moa);
farmaholelunk.breed(giraffe);
farmaholelunk.breed(kiwi);
farmaholelunk.breed(emu);
farmaholelunk.breed(elephant);


console.log(farmaholelunk);

//console.log(moa.thirstValue);

farmaholelunk.slaughter();
console.log(farmaholelunk);
