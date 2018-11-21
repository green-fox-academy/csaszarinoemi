import { Instrument } from "./instrument";
import { ElectricGuitar } from "./descendants";
import { BassGuitar } from "./descendants";
import { Violin } from "./descendants";



export abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  voice: string;

  constructor(name, numberOfStrings: number, voice: string) {
    super(name);
    this.numberOfStrings = numberOfStrings;
    this.voice = voice;
  }
  sound() {
    return `${this.name}, a ${this.numberOfStrings} - stringed instrument that goes ${this.voice}`;
  }

  play() {
    return console.log(this.sound());
  }
}