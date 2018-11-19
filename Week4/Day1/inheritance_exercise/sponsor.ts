class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;

  constructor(name: string, age: number, gender: string, company = 'Google', hiredStudents = 0) {
    super(name, age, gender)
    this.company = company;
    this.hiredStudents = hiredStudents; 
  }

  introduce(name, age, gender) {
    return (` ${super.introduce()} who presents ${this.company} and hired ${this.hiredStudents} students so far`)
  }

  hire(){
    this.hiredStudents++;
  }

  getGoal(){
    return (`${super.getGoal('Hire brilliant junior sofware developers')}`)
  }
}
}