/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
  hungerValue = 50;
  thirstValue = 50;

  eat() {
    this.hungerValue++;
  }
  drink() {
    this.thirstValue++;
  }
  play() {
    this.hungerValue++;
    this.thirstValue++;
  }
}

let moa = new Animal();
let giraffe = new Animal();

moa.play();
console.log(moa.thirstValue);