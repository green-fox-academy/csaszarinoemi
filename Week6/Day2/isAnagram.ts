function isAnagram(string1: string, string2: string):boolean {
  return string1.split("").sort().join("") === string2.split("").sort().join("");
}

let testWord1: string = "dog";
let testWord2: string = "god";
let testWord3: string = "green";
let testWord4: string = "fox";

console.log(isAnagram(testWord1, testWord2));
console.log(isAnagram(testWord3, testWord4));
