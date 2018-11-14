import { Car } from "./car";

export class Station {
  gasAmount: number;

  constructor (gasAmount: number = 100){
    this.gasAmount = gasAmount;
  }
  refill(car: Car) {
    return this.gasAmount -= car.capacity;
  }
}

