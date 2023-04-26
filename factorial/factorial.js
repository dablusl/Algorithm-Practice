//calculates factorial
//recursive method

function factorialize(num) {
    if (num <= 1){
      return 1;
    }else{ 
      return num*factorialize(num-1)
    };
}


//test
console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(10));