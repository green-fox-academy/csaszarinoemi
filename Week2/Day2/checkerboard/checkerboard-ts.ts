'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function checkerboard(x, y){
  ctx.fillStyle = 'black';
ctx.fillRect(x, y, 50, 50);
}
for (let i = 0; i <= canvas.width; i++) {
  for(let j = 0; j <= canvas.height; j++) {
    if ((i + j) % 2 === 0){
    checkerboard(50*i, 50*j);
  } 
  }
}







/*checkerboard(100+50*i, 50*i);
checkerboard(200+50*i, 50*i);
checkerboard(300+50*i, 50*i);
checkerboard(400+50*i, 50*i);
checkerboard(500+50*i, 50*i);
checkerboard(600+50*i, 50*i);
checkerboard(50*i, 100+ 50*i);
checkerboard(50*i, 200+ 50*i);
checkerboard(50*i, 300+ 50*i);
}