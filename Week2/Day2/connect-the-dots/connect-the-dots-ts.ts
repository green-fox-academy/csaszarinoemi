'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let dots1: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290], [10, 10]];
let dots2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(arr: number[][]) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  let startX: number = arr[0][0];
  let startY: number = arr[0][1];
  ctx.moveTo(startX, startY);
  for (let i: number = 1; i <= arr.length; i++){
    let toX: number = arr[i][0];
    let toY: number = arr[i][1];
    ctx.lineTo(toX, toY);
    ctx.stroke();
  }
}

connectDots(dots2);
  connectDots(dots1);
