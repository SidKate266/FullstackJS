function letCompareArray (arr1, arr2){
    if (arr1.length != arr2.length){
        return 'false';
    }

    let i = 0
    while (i < arr1.length){
        if(arr1[i] === arr2[i]){
            i++;
        }else{
            return 'false';
        }
        return 'true';
    }
}
var arr1 = ['первый', 'второй', 'третий'];
var arr2 = ['первый', 'второй', 'четвертый','третий'];
console.log(letCompareArray(arr1, arr2));