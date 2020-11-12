function filterByLength (arr, num1, num2){
    var newArr = [];
    newArr = arr.filter(arr => arr.length === num1 || arr.length === num2);
    return newArr;
}

const fruits = ['orange', 'apple', 'banana', ''];
console.log(filterByLength(fruits, 0, 5));
