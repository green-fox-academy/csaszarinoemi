import {Kid} from "./kid";
import {Santa} from "./santa";
import {School} from "./school"

let mySchool = new School;
mySchool.addNewKid(new Kid('Gábor', 7, false));
mySchool.addNewKid(new Kid('Liza', 6, true));
mySchool.addNewKid(new Kid('Roni', 7, true));
mySchool.addNewKid(new Kid('Kati', 8, false));
mySchool.addNewKid(new Kid('Pisti', 9, true));
mySchool.addNewKid(new Kid('Timi', 8, true));
mySchool.addNewKid(new Kid('Géza', 6, true));
mySchool.addNewKid(new Kid('Misi', 9, false));
mySchool.addNewKid(new Kid('Juli', 7, true));
mySchool.addNewKid(new Kid('Feri', 9, false));

let sanyi = new Santa('Józsi', 50);
let béla = new Santa('Béla', 62);

//console.log(sanyi.introduce());
mySchool.haveChristmas(sanyi);
console.log(mySchool);
console.log(sanyi.introduce());