
import { Flower } from "./flower";
import { Tree } from "./tree";
import { Plant } from "./plant";

export class Garden {
  plants: Flower[] | Tree[];
  name: string;

  constructor(name) {
    this.plants = [];
    this.name = name;
  }

  plantInfo() {
    for (let i = 0; i < this.plants.length; i++) {
      console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} needs water`);
    }
  }

  watering(waterAmount: number) {
    console.log(`Watering with ${waterAmount}`)
    let thirstyPlant = 0;
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].needWater()) {
        thirstyPlant++;
        this.plants[i].waterLevel += waterAmount / thirstyPlant * this.plants[i].waterAbsorb;
        if (this.plants[i].needWater()) {
          console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} needs water`);
        }
        else {
          console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} doesn't need water`);
        }
      }
      else {
        console.log(`The ${this.plants[i].getColor()} ${this.plants[i].constructor.name} doesn't need water`);
      }
    }
  }
}