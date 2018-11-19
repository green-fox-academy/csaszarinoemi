export class Student extends Person {

protected previousOrganization: string;
protected skippedDays: number;

constructor(name:string, age: number, gender: string, previousOrganization = 'The School of Life', skippedDays = 0 ){
  super(name, age, gender);
  this.previousOrganization = previousOrganization;
  this.skippedDays = skippedDays;
}

getGoal(){
  return (`${super.getGoal('My goal is: Be a junior software developer.')}`)
}

introduce(name, age, gender, previousOrganization, skippedDays){
return (`${super.introduce()}from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`);
}

skipDays(numberOfDays){
  this.skippedDays += numberOfDays;
}
}