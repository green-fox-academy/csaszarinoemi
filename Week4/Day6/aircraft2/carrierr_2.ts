import { Aircraft } from './aircraft2'
import { F16 } from './f16_2'
import { F35 } from './f35_2'

'use strict'

export class Carrier {
  storedAircrafts: Aircraft[] = [];
  ammoStored: number;
  healthPoint: number;

  constructor(ammoStored: number, healthPoint: number){
    this.ammoStored = ammoStored;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.storedAircrafts.push(aircraft);
  }

  fill(): void {
    if (this.ammoStored === 0) {
      throw 'Carrier is out of ammo';
    } else {
      this.storedAircrafts.forEach(e => {
        if (e.getIsPriority() && this.ammoStored > 0) {
          this.ammoStored = e.refill(this.ammoStored);
        }
      });
      this.storedAircrafts.forEach(e => {
        if (!e.getIsPriority() && this.ammoStored > 0) {
          this.ammoStored = e.refill(this.ammoStored);
        }
      });
    }
  }
  
  fight(carrier: Carrier): void {
    this.storedAircrafts.forEach(e => {
      carrier.healthPoint -= e.fight(); 
    })
  }

  getStatus(): string {
    let status = `HP: ${this.healthPoint}, Aircraft count: ${this.storedAircrafts.length}, Ammo Storage: ${this.ammoStored}, Total damage: ${this.getTotalDamage()}
    Aircrafts:`;

    this.storedAircrafts.forEach(aircraft => {
      status += `\r\n${aircraft.getStatus()}`;
    });

    return this.healthPoint > 0 ? status : `It's dead Jim :(` /* if (this.health){
                                                         return status;
                                                       } else {
                                                          return `It's dead Jim :(`
                                                      }  
                                                      ternary operator vagy conditional operator*/
  }


  getTotalDamage(): number {
    let damage = 0;
    this.storedAircrafts.forEach(aircraft => {
      damage += aircraft.getAllDamage();
    });
    return damage;
  }
}

export let ferihegy = new Carrier(300, 1000);
export let ferihegy2 = new Carrier(100, 500)

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
