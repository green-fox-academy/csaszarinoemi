'use strict';

export function fibonacci(numIn: number) {
  if (numIn < 0) {
    throw (`I can't work with negative or floating numbers`)
  } else if (numIn === 0) {
    return 0;
  } else if (numIn === 1) {
    return 1
  } else {
    return fibonacci(numIn - 1) + fibonacci(numIn - 2);
  }
}


console.log(fibonacci(7));