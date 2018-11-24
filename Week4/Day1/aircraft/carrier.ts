import { Aircraft } from './aircraft'
import { F16 } from './f16';
import { F35 } from './f35';

export class Carrier {
  private aircrafts: Aircraft[] = [];
  private storedAmmo: number;
  private health: number;

  constructor(storedAmmo: number, health: number) {
    this.storedAmmo = storedAmmo;
    this.health = health;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill() {
    if (this.storedAmmo === 0) {
      throw 'Carrier is out of ammo';
    } else {
      this.aircrafts.forEach(aircraft => {
        if (aircraft.isPriority() && this.storedAmmo > 0) {
          this.storedAmmo = aircraft.refill(this.storedAmmo);
        }
      });
      this.aircrafts.forEach(aircraft => {
        if (!aircraft.isPriority() && this.storedAmmo > 0) {
          this.storedAmmo = aircraft.refill(this.storedAmmo);
        }
      });
    }
  }

  fight(opponent: Carrier): void {
    this.aircrafts.forEach(aircraft => {
      opponent.health -= aircraft.fight();
    });
  }

  getStatus(): string {
    let status = `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storedAmmo}, Total damage: ${this.getTotalDamage()}
    Aircrafts:`;

    this.aircrafts.forEach(aircraft => {
      status += `\r\n${aircraft.getStatus()}`;
    });

    return this.health > 0 ? status : `It's dead Jim :(` /* if (this.health){
                                                         return status;
                                                       } else {
                                                          return `It's dead Jim :(`
                                                      }  
                                                      ternary operator vagy conditional operator*/
  }


  getTotalDamage(): number {
    let damage = 0;
    this.aircrafts.forEach(aircraft => {
      damage += aircraft.getAllDamage();
    });
    return damage;
  }
}
let ferihegy = new Carrier(300, 1000);
let ferihegy2 = new Carrier(100, 500)

for (let i: number = 0; i < 5; i++) {
  i % 2 === 0 ? ferihegy.add(new F16()) : ferihegy.add(new F35());
}

for (let i: number = 0; i < 5; i++) {
  i % 2 === 0 ? ferihegy2.add(new F16()) : ferihegy2.add(new F35());
}
ferihegy.fill();
ferihegy2.fill();
console.log(ferihegy.getStatus());
console.log(ferihegy2.getStatus());
ferihegy.fight(ferihegy2);
console.log(ferihegy.getStatus());
console.log(ferihegy2.getStatus());
