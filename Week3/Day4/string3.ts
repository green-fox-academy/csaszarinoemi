// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

export { };

function separateWithStar(textIn: string): string {
  if (textIn.length === 1) {
    return textIn;
  } else { 
    return separateWithStar(textIn.substr(0, 1)) +'*' + separateWithStar(textIn.substr(1, textIn.length));
  }
}

console.log(separateWithStar('Karácsony'));
