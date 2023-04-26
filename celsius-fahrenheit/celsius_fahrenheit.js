//allows to change from celsius to fahrenheit or viceverse
//applies for C & F

function changingMesure (value, orgScale, finScale ){
    if (orgScale.toLowerCase() == "f" && finScale.toLowerCase() =="c"){
        return (value - 32)*5/9;
    }
    if (orgScale.toLowerCase() == "c" && finScale.toLowerCase() =="f"){
        return value*9/5 + 32;
    }
    return "not valid scales";
}

//Explicit C to F
function convertCtoF(celsius) {
    return celsius*9/5+32;
  }

//Explicit F to C
function convertFtoC(fahrenheit) {
    return (fahrenheit-32)*5/9;
  }

//tests

console.log(changingMesure(30, "F","C"));
console.log(changingMesure(25, "F","c"));
console.log(changingMesure(10, "C","f"));
console.log(changingMesure(100, "C","F"));

console.log(convertCtoF(180));
console.log(convertFtoC(50));