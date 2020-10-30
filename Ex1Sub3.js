const word = 'Привет'

let result;

for (let i = 1; i <= word.length; i++){
  result = i;
}

let sign = result;

for (let i = sign - 1; i >= 0; i--){
  console.log(word[i]);
}