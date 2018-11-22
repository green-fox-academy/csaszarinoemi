'use strict';

export class TestClass {
  list: number[] = []

  constructor(numbers: number[]) {
    this.list = numbers
  }

  sum() {

    return this.list.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}
let testArray = new TestClass([4, 6, 1, 8, 33])
console.log(testArray.sum());