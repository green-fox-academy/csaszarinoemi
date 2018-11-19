export class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;


  constructor(name ='Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life', skippedDays = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.skippedDays = skippedDays;
    this.previousOrganization = previousOrganization;
  
  }
  getGoal(){
    console.log("Be a junior software developer.");
  }

  introduce(){
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days fromthe course already`);
  }
  skipDays(numberOfDays){
    this.skipDays += numberOfDays;
  }
}