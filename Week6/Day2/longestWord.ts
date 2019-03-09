
function getLongestWord(dummyText: string): string {
  let wordArray: string[] = [];
  let longestWord: string;
  wordArray = dummyText.split(" ");
  longestWord = wordArray[0];
  for (let i: number = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  } return longestWord;
}

let myDummyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus velit ac luctus accumsan. Nullam pretium, tortor facilisis elementum lacinia, nibh erat pulvinar odio, at ultrices sapien tortor suscipit nisi. Donec sed tincidunt libero. Maurisinfaucibusmassaeuscelerisqueenim. Morbi aliquet quam sed auctor porttitor. Nam semper magna gravida scelerisque hendrerit. Donec vel sem ante. Vivamus dapibus nibh et augue venenatis, quis ultrices mauris tincidunt. Aliquam felis massa, porta vitae diam non, suscipit eleifend est. Cras hendrerit posuere laoreet. Nam ullamcorper purus sed cursus mattis."
console.log(getLongestWord(myDummyText));