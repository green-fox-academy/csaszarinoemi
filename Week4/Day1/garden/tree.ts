import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.waterAbsorb = 0.4;
  }
  needWater() {
    return super.needWater();
  }
}