import { Animal } from "./animal";

export class Reptile extends Animal {

  constructor(name: string , age: number = 3 , gender: string = 'female', type: string = 'Cameleon', breeding: string = 'laying eggs') {
    super(name, age, gender, type, breeding)
  }


}