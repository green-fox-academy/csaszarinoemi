export class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  getGoal(){
    console.log( "Educate brilliant junior software developers.");
  }

  introduce(name, age, gender, level) {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor. ` )

  }
}