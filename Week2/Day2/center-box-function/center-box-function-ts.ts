'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function squareSize(size) {
  console.log(size);
  ctx.fillStyle = `rgb(${size}, 100, 200)`;
  ctx.fillRect(canvas.width/2-size/2, canvas.height/2-size/2, size, size);
} 
for (let i = 3; i >= 0; i--) {
  squareSize(50*i);
} 