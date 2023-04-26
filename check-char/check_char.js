//check if the element on the second value of the array are included in the first element of the array

function checkChar(arr) {
    arr[0]=arr[0].toLowerCase();
    arr[1]=arr[1].toLowerCase();
  
    for (let char of arr[1]){
      if (arr[0].indexOf(char)<0){
        return false;
      }
    }
    return true;
  }
  
  checkChar(["hello", "hey"]);