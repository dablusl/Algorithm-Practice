// insert arr1 in the n position of  arr2

function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0,n),...arr1.slice(),...arr2.slice(-n)] ;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);