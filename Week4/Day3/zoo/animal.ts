export abstract class Animal {
  name: string;
  age: number;
  gender: string;
  type: string;
  breeding: string;

  constructor(name: string, age: number, gender: string, type: string, breeding: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type = type;
    this.breeding = breeding;
  }

  getName() {
    return this.name;
  }

  breed() {
    return this.breeding;
  }
}