const word = 'Привет'
let result 
for (let i = 1; i <= word.length; i++){
  result = i;
}

for (let i = result - 1; i >= 0; i--){
  console.log(word[i]);
}