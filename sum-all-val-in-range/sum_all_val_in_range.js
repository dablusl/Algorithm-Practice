//applying n(n-1)/2 logic

function sumAll(arr) {
    let mathFormula = function (x){
        return x*(x+1)/2
    }
  
    return  mathFormula(Math.max(...arr)) - mathFormula(Math.min(...arr)-1) ;
  }
  
  console.log(sumAll([1, 4]));

  