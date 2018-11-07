'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

/* megtartom csak mert nagyon tetszik 
function squares(size, color) {
  ctx.fillStyle = `rgb(${color}, 100,${color})`;
ctx.fillRect(canvas.width/2-size/2, canvas.height/2-size/2, size, size);
}
for (let i = 5; i >= 1; i--) {
  squares(50*i, 30*i);
}*/

function squares(size, color) {
  ctx.fillStyle = color;
ctx.fillRect(canvas.width/2-size/2, canvas.height/2-size/2, size, size);
}
let color = ['pink','red', 'orange', 'yellow', 'green', 'blue', 'purple' ]
for (let i = 6; i >= 0; i--) {
  squares(50*i, color[i]);
}
