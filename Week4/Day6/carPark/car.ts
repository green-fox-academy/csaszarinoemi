import { readFile, writeFile, appendToFile } from './fileIO'
'use strict'

export class Car {
  private id: number;
  private licensePlate: string
  private manufactureYear: number;
  private parkingTicket: number;

  constructor(id: number, licensePlate: string, manufactureYear: number, parkingTicket: number) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.manufactureYear = manufactureYear;
    this.parkingTicket = parkingTicket;
  }

  getID():number {
    return this.id;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  getManufactureYear(): number {
    return this.manufactureYear;
  }

  getParkingTicket(): number {
    return this.parkingTicket;
  }
}
