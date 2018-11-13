/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

class Counter {
  counter: number;
  constructor(integer: number = 0) {
    this.counter = integer;
  }
  addN(number) {
    this.counter += number;
  }
  add() {
    this.counter++;
  }
  get() {
    return this.counter.toString();
  }
  reset() {
    this.counter = 0;
  }
}

let counter1 = new Counter(12);
let counter2 = new Counter(8);

counter1.get();
console.log(typeof counter1.get());