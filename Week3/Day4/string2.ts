// Given a string, compute recursively a new string where all the 'x' chars have been removed.
export { };

function changeLowercaseXToLetterY(textIn: string) {

  if (textIn.replace('x', '') === textIn) {
    return textIn;
  } else {
    return changeLowercaseXToLetterY(textIn.replace('x', ''));
  }
}

console.log(changeLowercaseXToLetterY("TexxxxxxXas"));
