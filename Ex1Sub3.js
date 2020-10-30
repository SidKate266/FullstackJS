let word = 'Привет'
let newWord = "";
function reverseWord(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return(newWord);
}
reverseWord(word)
