function stringToArray (str) {
    let arr = str.split(' ');
    return arr.map(function(element){
        const obj = {
            word: element,
            length: element.length,
            isCapitalize: element.charAt(0) === element.charAt(0).toUpperCase(),
        };
    return obj;
    });
}
console.log(stringToArray('I am just trying'));