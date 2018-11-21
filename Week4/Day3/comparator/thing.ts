import { Comparable } from "./fleetOfThings";

export class Thing implements Comparable {
  protected name: string;
  protected completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  compareTo(other: Thing) {
    if (this.completed < other.completed) {
      return -1;
    } else if (this.completed === other.completed) {
      return 0;
    } else {
      return 1;
    }
  }
}
  public complete() {
    this.completed = true;

  }
  checkIfComplete() {
    return this.completed;
  }
  bringTheName() {
    return this.name;
  }



