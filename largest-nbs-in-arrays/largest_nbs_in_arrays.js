//given an array of arrays, find the largest number for each array
function largestOfFour(arr) {
    return arr.map( val => Math.max(...val));
}
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));