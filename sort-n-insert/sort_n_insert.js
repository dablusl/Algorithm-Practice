//loop version with bulles sort

function getIndexToIns(arr, num) {
    var arr2 = arr.slice();
    arr2.push(num);
  
    for (var i=0; i<arr2.length-1; i++){
      var temp = 0;
      var k=i;
      
      while(k<arr2.length-1){
        if(arr2[k] > arr2[k+1]){
            temp = arr2[k];
            arr2[k]=arr2[k+1];
            arr2[k+1]=temp;
          }
          k++;
      }
    }
  
  
    return arr2.indexOf(num);
}

//using array.sort()
function getIndexToIns2(arr, num) {
    let newArr =[...arr.slice()];
    newArr.push(num);
    newArr.sort((a,b) => a-b);
  
    return newArr.indexOf(num);
  }