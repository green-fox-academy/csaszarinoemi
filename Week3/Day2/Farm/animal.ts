 export class Animal {
  hungerValue = 50;
  thirstValue = 50;
  name: string;

  constructor(name:string){
    this.name = name
    this.hungerValue;
    this.thirstValue;
  }

  eat() {
    this.hungerValue++;
  }
  drink() {
    this.thirstValue++;
  }
  play() {
    this.hungerValue++;
    this.thirstValue++;
  }
}


