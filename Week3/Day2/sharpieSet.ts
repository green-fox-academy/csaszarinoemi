import { Sharpie, yellowSharpie, blueSharpie, pinkSharpie } from "./sharpie";


let importSharpie: Sharpie[] = [yellowSharpie, blueSharpie, pinkSharpie];

class SharpieSet {
  sharpieSetList: Sharpie[] = [];

  constructor(list: Sharpie[] = []) {
    this.sharpieSetList = list;
  }

  countUsable() {
    for (let i = 0; i < this.sharpieSetList.length; i++) {
      if (this.sharpieSetList[i].inkAmount !== 0) {
        console.log(`Usable Sharpie ${this.sharpieSetList[i].color}`);
      }
    }
  }

  removeTrash() {
    for (let i = 0; i < this.sharpieSetList.length; i++) {
      if (this.sharpieSetList[i].inkAmount === 0) {
        console.log(`Removed Sharpie ${this.sharpieSetList[i].color}`);
        this.sharpieSetList.splice(i, 1);
        
      }
    }

  }
}

let newSharpie =  new SharpieSet(importSharpie);

newSharpie.countUsable();
newSharpie.removeTrash();
