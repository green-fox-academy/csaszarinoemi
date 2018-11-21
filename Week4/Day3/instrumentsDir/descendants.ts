import { StringedInstrument } from "./StringedInstrument";


export class ElectricGuitar extends StringedInstrument {
  constructor( numberOfStrings: number = 6,name: string = 'ElectricGuitar', voice: string = 'Twang') {
    super(name, numberOfStrings, voice);
  }
}

export class BassGuitar extends StringedInstrument {
  constructor( numberOfStrings: number = 4,name: string = 'BassGuitar', voice: string = 'Duum-duum-duum') {
    super(name, numberOfStrings, voice);
  }

}

export class Violin extends StringedInstrument {
  constructor( numberOfStrings: number = 4, name: string = 'Violin', voice: string = 'Screech') {
    super(name, numberOfStrings, voice);
  }
}