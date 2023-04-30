function smallestCommons(arr) {
    // who Min who Max
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let newArr = [];
    
    // create values
    for (let i = min; i <= max; i++) {
        newArr.push(i);
    }
    
    let i = 2;
    let mult = 1;

    while( newArr.some( val => val > 1)){
        while(newArr.some(val => val%i==0)){
            newArr = newArr.map( val => {
                                    if(val%i == 0){
                                        return val/i;
                                    }else{
                                        return val;
                                    }
            }).filter(val => val!=1)

            mult*=i;
        }
        i++;
    }

    return mult
 }

 smallestCommons([1,5]);