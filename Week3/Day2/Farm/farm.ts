import { Animal } from "./animal"

export class Farm {
  animalList: Animal[] = [];
  slots: number;
  //ha array akkor a constructorba a zárójelbe nem kell beleírni!!!!
  constructor(freeplaces: number = 12) {
    this.animalList = [];
    this.slots = freeplaces;
  }

  breed(animal: Animal) {
    if (this.slots > 0) {
      this.animalList.push(animal);
      this.slots--;
    }
  }

  slaughter() {
    this.animalList.sort(function (a, b) {
      return b.hungerValue - a.hungerValue;
    })
    console.log(`Removed animal: ${this.animalList[0].name}`)
    this.animalList.shift();
    this.slots++;
  } 
}













































































/*let importAnimalList: Animal[] = [moa, giraffe, kiwi, emu, elephant];

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
console.log(newAnimalList);*/