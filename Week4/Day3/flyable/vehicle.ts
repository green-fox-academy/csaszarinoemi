

export abstract class Vehicle {
  name: string;
  passengerNumber: number;
  runsWith: string;

  constructor(name: string, passengerNumber: number, runsWith: string) {
    this.name = name;
    this.passengerNumber = passengerNumber;
    this.runsWith = runsWith;
  }

}