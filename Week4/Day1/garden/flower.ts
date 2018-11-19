import { Plant } from "./plant";

export class Flower extends Plant {


constructor(color: string){
  super(color);
  this.waterAbsorb = 0.75;
}

needWater() {
  return this.waterLevel < 5;
}
getColor(){
  return this.color;
}
}