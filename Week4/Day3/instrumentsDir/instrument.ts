'use strict';
import { StringedInstrument } from "./StringedInstrument";


export abstract class Instrument {
  protected name: string;
  

  constructor(name: string) {
    this.name = name;
  }

  play(){
  
  }
}