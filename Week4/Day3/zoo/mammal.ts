import { Animal } from "./animal";

export class Mammal extends Animal {
  constructor(name: string, age: number = 10, gender: string= 'male', type: string = 'lion', breeding: string = 'pushing miniature versions out') {
    super(name, age, gender, type, breeding)
  }
}