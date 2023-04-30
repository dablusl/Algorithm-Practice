function steamrollArray(arr) {
    let newArr =  [];
    
    for (let i = 0; i<arguments.length; i++){
        newArr.push(arguments[i]);
    }

    while( newArr.some( val => Array.isArray(val))){
        let i =0;
        let tempArr = []
        while ( i < newArr.length){
            if (Array.isArray(newArr[i])){
                tempArr.push(...newArr[i]);
            }else{
                tempArr.push(newArr[i]);
            }
            i++;
        }
        newArr = tempArr;
    }
    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);