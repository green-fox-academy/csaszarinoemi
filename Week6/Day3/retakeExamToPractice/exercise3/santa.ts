import { Kid } from "./kid";

'use strict'

export class Santa {
  protected name: string;
  protected age: number;
  protected numberOfGifts: number = 100;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getGiftInfo(): string {
    if (this.numberOfGifts > 0) {
      return `I have ${this.numberOfGifts} gifts in my bag.`
    } else {
      return 'I do not have any gifts in my bag.'
    }
  }

  introduce(): string {
    return `My name is ${this.getName()}, I am ${this.getAge()} years old. ${this.getGiftInfo()}`;
  }

  assignGifts(list: Kid[]) {
    let giftCounter = 0;
    for (let i = 0; i < list.length; i++) {
      if (this.numberOfGifts > 0) {
        if (list[i].getIsGood()) {
          list[i].getGift();
          this.numberOfGifts--;
          giftCounter++;
        } else {
          this.numberOfGifts === this.numberOfGifts
        }
      } else {
        this.numberOfGifts = 0;
        console.log('Santa is out of gifts :(');
      }
    }
    return giftCounter;
  }
}
