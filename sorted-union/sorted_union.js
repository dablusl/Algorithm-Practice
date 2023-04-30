function uniteUnique(arr) {
    let finalArr=[];
  
    finalArr.push(...arguments[0].filter( (val, i) => arguments[0].indexOf(val) == i));
  
    for (let i = 1; i < arguments.length; i++){
    
      finalArr.push(...arguments[i].filter( val => !finalArr.includes(val)))
  
    }
  
    return finalArr;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));