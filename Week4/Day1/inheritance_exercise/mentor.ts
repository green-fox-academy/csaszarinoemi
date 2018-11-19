class Mentor extends Person {
  
  protected level: string;

  constructor(name: string, age: number, gender: string, level: string = 'intermediate'){
    super(name, age, gender);
    this.level = level
  }

  getGoal(){
    return (`${super.getGoal('My goal is: Educate brilliant junior software developers.')}`);
  }

  introduce(name, age, gender, level){
    return (`${super.introduce()} ${this.level} mentor`)
  }
}