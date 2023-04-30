function diffArray(arr1, arr2) {
    const newArr = [];

    newArr.push(...arr1.filter( val => arr2.includes(val)== false))
    newArr.push(...arr2.filter( val => arr1.includes(val)== false))

    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//With concat

function diffArray2(arr1, arr2) {
return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
}