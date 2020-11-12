function sortDesc(arr){
    var newArr = [];
    newArr = arr.sort(function(a, b) {
        return b - a;
      })
    return newArr;
}

const numbers = [-20, -10, 0, 10, 20, 30];
console.log(sortDesc(numbers));