import { Person } from "./person"

export class Student extends Person {

  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age}, year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}