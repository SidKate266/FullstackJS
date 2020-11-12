
function shuffle (arr){
    const newArr = arr.map(function(elem,index){
        return [elem, Math.random()];
        })
    .sort(function(a,b){
        return a[1] - b[1];
    })
    .map(function(elem){
    return elem[0];
    });
    return newArr;
}

array = [1, 2, 3, 4, 5];
console.log(shuffle(array));
