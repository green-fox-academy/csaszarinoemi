export class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name ='Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = hiredStudents; 
  }

  introduce(name, age, gender) {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who presents ${this.company} and hired ${this.hiredStudents} students so far`)
  }

  hire(){
    this.hiredStudents++;
  }
  getGoal(){
    console.log('Hire brilliant junior sofware developers')
  }
}