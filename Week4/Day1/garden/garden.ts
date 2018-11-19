
import { Flower } from "./flower";
import { Tree } from "./tree";

export class Garden {
plants: Flower[] | Tree[];
name: string;

constructor(name){
  this.plants = [];
  this.name = name;
}
  watering(waterAmount: number){
    console.log(`Watering with ${waterAmount}`)
    let thirstyPlant = 0;
    for (let i = 0; i <= this.plants.length; i++){
      if (this.plants[i].needWater() === true){
        thirstyPlant++;
      } else console.log(`${this.name[i]} doesn't need water`)
    } 
    for (let i = 0; i <= this.plants.length; i++){
        if (this.plants[i].needWater() === true){
          this.plants[i].waterLevel += waterAmount/thirstyPlant;
      }
    }
  }
}