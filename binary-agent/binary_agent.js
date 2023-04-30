function binaryAgent(str) {

    function binaryToNum(biStr){
      let result = 0;
  
      for( let i = 0; i<biStr.length ; i++){
        result+= Math.pow(2,biStr.length-(i+1))*Number(biStr[i]);
      }
  
      return result;
  
    }
  
    return str
      .split(" ")
      .map(val => String.fromCharCode(binaryToNum(val)))
      .join("")
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));