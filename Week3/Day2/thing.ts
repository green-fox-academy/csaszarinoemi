class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
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
}

export { Thing };

