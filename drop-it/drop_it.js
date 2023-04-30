function dropElements(arr, func) {
    let i = 0;
  
    while ( !func(arr[i])){
      i++;
    }
  
    return arr.slice(i);
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });