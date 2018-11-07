'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function rectangles(green, x, size){
  ctx.fillStyle = `rgb(0, ${green}, 150)`;
ctx.fillRect(x, 150, 100 + size, 100 + size);
}
for (let i = 0; i <= 3; i++) {
  rectangles(50*i, (20 + 140*i), 8*i);
}