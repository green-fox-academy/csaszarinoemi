'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function lineDrawing(x, y) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(300, 200);
  ctx.lineTo(x, y);
  ctx.stroke();
};
for (let i= 0; i <= 2; i++) {
  lineDrawing(200 + i*50, 100)
};
