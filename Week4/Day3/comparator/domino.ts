'use strict'

import { Comparable } from "./compare";
import {Printable} from "./../Printable"

class Domino implements Comparable, Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(other: Domino) {
    if (this.values[0] < other.values[0]) {
      return -1;
    } else if (this.values[0] === other.values[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  printAllFields(){

  }
}

export { Domino };


