export class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name ='Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
  }
  introduce(name, age, gender) {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`)

  }
  
}