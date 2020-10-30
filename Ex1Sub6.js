const age = 18;
const paid = 'true';
const blocked = 'false';
const badUsername = 'false';
const isAdmin = 'ture'
let result

result = isAdmin && age >= 18 && age <= 35 ? 'welcome' :
!isAdmin && age >= 18 && age <= 35&& paid && !blocked && !badUsername ? 'welcome' : "Sorry, u can't come in"

console.log(result);