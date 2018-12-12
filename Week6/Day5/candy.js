'use strict'

let createCandiesButton = document.querySelector('.create-candies');
let buyLollypopsButton = document.querySelector('.buy-lollypops');
let candyMachine = document.querySelector('.candy-machine');

let candyCounter = document.querySelector('.candies');
let candy_second = document.querySelector('.speed');
let lollypops = document.querySelector('.lollypops');

let candyRainRate = 1;
let counter = 1;
createCandiesButton.addEventListener('click', (e) => {
  counter++;
  candyCounter.innerHTML = counter;
})

let lollyPopCounter = 3;
buyLollypopsButton.addEventListener('click', (e) => {
  if (counter >= 100) {
    counter -= 100;
    lollypops.innerHTML += '🍭';
    lollyPopCounter++;
    candyCounter.innerHTML = counter;
  }
})

const makeCandy = () => {
  let candyProductionRate = Math.floor(lollyPopCounter / 10) * candyRainRate;
  counter += candyProductionRate;
  candyCounter.innerHTML = counter;
  candy_second.innerText = candyProductionRate;
}

candyMachine.addEventListener('click', (e) => {
  candyRainRate *= 10;

})

setInterval(makeCandy,1000);