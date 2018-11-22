'use strict';

export const anagram = (string1: string, string2: string) => {

return  string1.toLowerCase().split('').sort().join('') === string2.toLocaleLowerCase().split('').sort().join('');
  
}
console.log(anagram('almafa', 'körtefa'));