'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function divideCanvas()

function drawPurpleLine(x) {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(400, x);
  ctx.stroke();
}
function drawGreenLine(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, x);
  ctx.lineTo(x, 400);
  ctx.stroke();
}
let x:any = 1;
for (let i = 0; i <= canvas.width; i += 20){
  x = i;
  drawPurpleLine(x);
  drawGreenLine(x)
}