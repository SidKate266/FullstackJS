function stringToArray (str) {
    var arr = [];
    arr = str.split(' ');
    var newArr = [];
    newArr = arr.map(function(element){
        const obj = {};
        obj.Word = element;
        obj.Length = element.length
        obj.isCapitalize = element.charAt(0) === element.charAt(0).toUpperCase() ? 'true' : 'false';
    return obj;
    });
    return newArr;
}
console.log(stringToArray('I am just trying'));