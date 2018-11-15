// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeLowercaseXToLetterY(textIn: string) {

  if (textIn.replace('x', 'y') === textIn) {
    return textIn;
  } else {
    return changeLowercaseXToLetterY(textIn.replace('x', 'y'));
  }
}

console.log(changeLowercaseXToLetterY("TexxxxxxXas"));
