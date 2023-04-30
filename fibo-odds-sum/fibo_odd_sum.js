function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;
  
    while ( curr <= num){
        console.log(curr)
      if (curr%2 != 0){
        sum+= curr;
      }
      curr += prev;
      prev = curr - prev;
      
    }
  
    return sum;
  }
  
  sumFibs(4);
  
