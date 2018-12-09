'use strict'
import {Kid} from "./kid";
import {Santa} from "./santa";

export class School {
  listOfKids: Kid[] = [];

  addNewKid(newKid: Kid): void{
    this.listOfKids.push(newKid);
  }

  haveChristmas(santa: Santa): void {
    santa.assignGifts(this.listOfKids);
  }
}