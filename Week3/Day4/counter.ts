// Write a recursive function that takes one parameter: n and counts down from n.

function countingBack(num: number) {
  if (num <= 0) {
    console.log(`I've reached to ${num}`);
  } else {
    console.log(num);
    return countingBack(--num); // a num-- nem megy!!! num-1 vagy --num jó csak!!!
  }
}
countingBack(10);