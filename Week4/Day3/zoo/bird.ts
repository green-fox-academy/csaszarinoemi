'use strict'

import { Animal } from "./animal";
import {Flyable} from "../flyable/flyable";

export class Bird extends Animal implements Flyable {
  constructor(name: string, age: number = 2, gender: string = 'male', type: string = 'kiwi', breeding: string = 'laying eggs') {
    super(name, age, gender, type, breeding)
  }
  land(){

  }
  fly(){

  }
  takeoff(){

  }
}

//Flyable and the methods come from the Flyable task