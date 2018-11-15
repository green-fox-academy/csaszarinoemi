// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function summingUp (num: number): number {
  if (num > 1) {
   return   num += summingUp(--num);
  }else {
    return 1;
  }
}
console.log(summingUp(10));

