//find the first value true for the given function

function findElement(arr, func) {
    return arr.filter(val => func(val))[0];
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));