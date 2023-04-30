function addTogether(x) {
    if(typeof arguments[0] != "number") {
      return undefined;
    }
  
    if (arguments.length == 2){
        if(typeof arguments[1] != "number") {
          return undefined;
        }
      return arguments[0] + arguments[1];
    }
    else{
      return function(y) {
          if(typeof y != "number") {
            return undefined;
          }
        return x + y;
        }
    }
  }
  
  addTogether(2,3);