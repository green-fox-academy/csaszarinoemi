
'use strict'

export class Aircraft {
  protected ammoMax: number;
  protected currentAmmo: number = 0;
  protected baseDamage: number;
  protected isPriority: boolean;

  constructor(ammoMax: number, baseDamage: number, isPriority: boolean = false) {
    this.isPriority = isPriority;
    this.ammoMax = ammoMax;
    this.baseDamage = baseDamage;
  }

  fight(): number {
    this.currentAmmo = 0;
    return this.baseDamage * this.currentAmmo;
  }

  refill(input: number): number {
    let missingAmo: number = 0
    let remainigAmmo: number = 0
    if (input + this.currentAmmo > this.ammoMax) {
      missingAmo = this.ammoMax - this.currentAmmo;
      this.currentAmmo = this.ammoMax;
      remainigAmmo = input - missingAmo;
    } else {
      this.currentAmmo += input;
      remainigAmmo = input - missingAmo;
    } return remainigAmmo;
  } 

  getType(): string {
    return this.constructor.name;
  }

  getCurrentAmo(): number {
    return this.currentAmmo
  }

  getBaseDamage(): number {
    return this.baseDamage;
  }

  getAllDamage(): number {
    return this.currentAmmo * this.baseDamage;
  }

  getIsPriority(): boolean {
    return this.isPriority;
  }

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.getCurrentAmo()}, Base Damage: ${this.getBaseDamage()}, All Damage: ${this.getAllDamage()}`
  }
}