

export class Plant {
  color: string;
  waterLevel: number;
  waterAbsorb: number;

  constructor(color:string){
    this.color = color;
    this.waterLevel = 0;
  }
  needWater() {
    return this.waterLevel < 5
  } 

}

