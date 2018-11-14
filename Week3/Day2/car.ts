import { Station } from "./station";


export class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100 ) {
    this.capacity = capacity;
    this.gasAmount = gasAmount;
  }
    fill (station: Station){
      return this.capacity - this.gasAmount;
  }
}

let station1 = new Station();

let car1 = new Car(10, 80);


console.log(station1.refill(car1));

