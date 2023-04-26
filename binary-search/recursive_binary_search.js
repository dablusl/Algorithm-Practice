//binary search in an array of ascending values
//returns true or false if value exists in the array

function RecursiveBinarySearch(arr, target){
    if (arr.length == 0){
        return false
    }else {
        let mid = Math.floor((arr.length)/2)

        if (arr[mid] == target){
            return true
        } else {
            if (arr[mid] < target){
                return RecursiveBinarySearch(arr.slice(mid+1), target)
            }else {
                return RecursiveBinarySearch(arr.slice(0,-(mid-1)), target)
            }
        }
    }
}


//some tests
var arr1 = [0,1,2,3,4,5,6,7,8];
var arr2 = [10,11,24,35,48,57];
var arr3 = [39,40,41,42,45,57,58];


console.log(RecursiveBinarySearch(arr1,7));
console.log(RecursiveBinarySearch(arr2,11));
console.log(RecursiveBinarySearch(arr3,80));