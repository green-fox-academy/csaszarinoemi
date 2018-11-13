import { Thing } from "./thing";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }
  print() {
    for (let i = 0; i < this.things.length; i++) {
      if (this.things[i].checkIfComplete() !== true) {
        console.log(`[ ] ${this.things[i].bringTheName()}`)
      } else {
        console.log(`[x] ${this.things[i].bringTheName()}`)
      }
    }
  }
}



export { Fleet };
