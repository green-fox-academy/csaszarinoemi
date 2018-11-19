

export class Plant {
  protected color: string;
  waterLevel: number;
  waterAbsorb: number;

  constructor(color: string) {
    this.color = color;
    this.waterLevel = 0;
  }
  needWater() {
    return this.waterLevel === 0;
  }
  getColor() {
    return this.color;
  }
}

