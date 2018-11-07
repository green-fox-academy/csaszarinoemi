'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function diagonal(x, y, z) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, z, z);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, z, z);
}

  let coordinates: number[] = [15, 15]
for (let i: number = 1; i <= 6; i++) {
  diagonal(coordinates[0], coordinates[1], i * 15);
  coordinates[0] += i * 15;
  coordinates[1] += i * 15;
}

