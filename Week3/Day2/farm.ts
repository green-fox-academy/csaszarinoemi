import { Animal, moa, giraffe, kiwi, emu, elephant } from "./animal"

/*Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal */

let importAnimalList: Animal[] = [moa, giraffe, kiwi, emu, elephant];

class Farm {
  animalList: Animal[] = [];
  slots: number;

  constructor(list: Animal[] = [], freeSpaces: number) {
    this.animalList = list;
    this.slots = freeSpaces;
  }

  breed() {
    if (this.slots - this.animalList.length !== 0) {
      let zebra = new Animal;
      this.animalList.push(zebra);
      this.slots--;
    }
  }
  slaughter() {
    for (let i = 0; i <= this.animalList.length; i++) {
      console.log(Math.min((this.animalList[i].hungerValue)));


    }

  }
}


let newAnimalList = new Farm(importAnimalList, 10);
newAnimalList.breed();
console.log(newAnimalList);