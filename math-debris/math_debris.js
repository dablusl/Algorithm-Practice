function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    let orbPer = 2*Math.PI*Math.sqrt(Math.pow(arr[0]["avgAlt"],3)/GM)


    console.log(orbPer)
  
    const ansObj = {
      name : arr[0]["name"],
      orbitalPeriod : orbPer
    }
  
    return ansObj;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));