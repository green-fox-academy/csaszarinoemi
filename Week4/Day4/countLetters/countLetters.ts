'use strict';

export const countLetters = (a: string) => {
  let dictionary ={}
  a.split('').sort().forEach(char => {
    if (char !== ' ')
    dictionary[char] ? dictionary[char]++ : dictionary[char] = 1
  });
  return dictionary;
}

console.log(countLetters('Ez most a teszt szöveg'));

// ha a betű szerepelt már akkor 1-el növeli a valuet, ha nem, akkor az lesz az új value