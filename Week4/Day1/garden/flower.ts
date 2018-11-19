import { Plant } from "./plant";

export class Flower extends Plant {


constructor(color: string){
  super(color);
  this.waterAbsorb = 0.75;
}

needWater() {
  return super.needWater();
}
}