import {Garden} from "./garden"
import {Flower} from "./flower"
import {Tree} from "./tree"
import {Plant} from "./plant"

let myGarden = new Garden('myGarden');

let liliom = new Flower('yellow');
let arvacska = new Flower('blue');
let lilaFa = new Tree('purple');
let narancsFa = new Tree ('orange');

myGarden.plants.push(liliom);
myGarden.plants.push(arvacska);
myGarden.plants.push(lilaFa);
myGarden.plants.push(narancsFa);

myGarden.plantInfo();
console.log('------------------------------------------------')
myGarden.watering(40);
console.log('------------------------------------------------')
myGarden.watering(70);

