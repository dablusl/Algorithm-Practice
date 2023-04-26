//confirm is a str ends with the target without using the .endWith() method
function confirmEnding(str, target) {
    return str.slice(-target.length) === target ;
  }
  
  console.log(confirmEnding("Bastian", "n"));