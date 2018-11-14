/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width 
(which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

 class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount
  }
  use() {
    this.inkAmount--;
  }
}

let yellowSharpie = new Sharpie('yellow', 2.5);
let blueSharpie = new Sharpie('blue', 1.5);
let pinkSharpie = new Sharpie('pink', 2.3);

function usingYellow() {
  for (let i = 0; i < 100; i++) {
    yellowSharpie.use();
  }
}

usingYellow();
console.log(yellowSharpie);
export{Sharpie, yellowSharpie, blueSharpie, pinkSharpie};