
import { Person } from "./person"

export class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company = 'Google', hiredStudents = 0) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age}, year old ${this.gender} who presents ${this.company} and hired ${this.hiredStudents} students so far`);
  }

  hire() {
    this.hiredStudents++;
  }

  getGoal() {
    console.log('Hire brilliant junior sofware developers');
  }
}
