import { Animal } from "./animal";

export class Bird extends Animal {
  constructor(name: string, age: number = 2, gender: string = 'male', type: string = 'kiwi', breeding: string = 'laying eggs') {
    super(name, age, gender, type, breeding)
  }
}