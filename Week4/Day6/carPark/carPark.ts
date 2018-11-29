import {Car} from './car'
import { readFile, writeFile, appendToFile } from './fileIO'


'use strict'

class Carpark {
  private carPark: Car[] = [];

  addCar(car:Car): void {
    this.carPark.push(car);
  }

  addCarToFile(car:Car) {
   appendToFile('cars.csv', `\r\n${car.getLicensePlate()},${car.getManufactureYear()},${car.getParkingTicket()}`)
  }

  removeCar(id: number) {
    this.carPark.forEach((e, i) => {
      if (e.getID() === id) {
        this.carPark.splice(i, 1);
      }
    });
    return this.carPark;
  }

  getOldest(fileName: string): string {
    let content = readFile(fileName);
    let array = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => {
        array.push(e.split(','));
      });

      let index = 0;
      let smallest = 9999;
      array.forEach((e, i) => {
        console.log(e);
        if (e[1] < smallest) {
          index = i;
          smallest = e[1];
        }
      });
      return array[index][0];
    }
  }

  getPenalty(fileName: string) {
    let content = readFile(fileName);
    let noParkingTicket: string[] = [];
    if (content !== null) {
      content.split('\r\n').forEach(e => {
        if(e.split(',')[2] === '0') {
          noParkingTicket.push(e.split(',')[0]);
        }
      });
    }
    return noParkingTicket;
  }
}


let myCar = new Car(12, 'ABCD-92', 1984, 1);
let myCar1 = new Car(14, 'ABCD-92', 1984, 0);
let myCar2 = new Car(2, 'ABCD-92', 1984, 0);
let myCarPark = new Carpark();

myCarPark.addCar(myCar);
myCarPark.addCar(myCar1);
myCarPark.addCar(myCar2);
myCarPark.getOldest();

myCarPark.addCarToFile(myCar);

