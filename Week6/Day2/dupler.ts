let myarray: number[] = [1,2,3,4,5];
myarray.forEach((e, i, a) => {
  a[i] = e*2;
});

console.log(myarray);