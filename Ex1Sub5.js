const age = 18;
const paid = 'true';
const blocked = 'false';
const badUsername = 'false';
const isAdmin = 'ture'
let result

if(isAdmin && age >= 18 && age <= 35){
    console.log('Welcome');
}else if (!isAdmin && age >= 18 && age <= 35&& paid && !blocked && !badUsername){
    console.log('Welcome');
}else{
    console.log("Sorry, u can't come in");
}
