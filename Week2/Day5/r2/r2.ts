'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawGreenLine1(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(200, x);
  ctx.lineTo(200-x, 200);
  ctx.stroke();
}
function drawGreenLine2(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(200, x);
  ctx.lineTo(200+x, 200);
  ctx.stroke();
}
function drawGreenLine3(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(200+x, 200);
  ctx.lineTo(200, 400-x);
  ctx.stroke();
}
function drawGreenLine4(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(200, 400-x);
  ctx.lineTo(200-x, 200);
  ctx.stroke();
}
let x:any = 1;
for (let i = 0; i <= canvas.width/2; i += 10){
  x = i;
  drawGreenLine1(x);
  drawGreenLine2(x);
  drawGreenLine3(x);
  drawGreenLine4(x);
}