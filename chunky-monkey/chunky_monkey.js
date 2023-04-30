//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let i=0;
  
   while(i< arr.length){
        newArr.push(arr.slice(i,size+i));
        i+= size;
    }
  
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);