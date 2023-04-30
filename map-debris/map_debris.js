function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let results = [];


    for ( let val of arr){
      let orbPer = Math.round(2*Math.PI*Math.sqrt(Math.pow(val.avgAlt+earthRadius,3)/GM));
  
      const ansObj = {
        name : val.name,
        orbitalPeriod : orbPer
      }
      results.push(ansObj);
    }
  
    return results;
 }

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));