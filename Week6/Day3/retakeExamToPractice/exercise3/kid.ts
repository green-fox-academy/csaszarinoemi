'use strict';

export class Kid {
  protected name: string;
  protected age: number;
  protected isGood: boolean;
  protected isHappy: boolean = false;

  constructor(name: string, age: number, isGood: boolean) {
    this.name = name;
    this.age = age;
    this.isGood = isGood;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number{
    return this.age;
  }
  getGift(): boolean {
    return this.isHappy = true;
  }

  answerIfHappy(): string {
    if (this.isHappy){
      return 'I am happy!';
    } else {
      'I am not happy.'
    }
  }

  introduce(): string {
    return `My name is ${this.getName()}, I'm ${this.getAge()}, years old. ${this.answerIfHappy()}`
  }
}