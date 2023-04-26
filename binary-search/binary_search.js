function BinarySearch(arr, target){
    var first = 0;
    var last = arr.length -1;

    while (first <= last){
        var mid = Math.floor((first+last)/2)

        if (arr[mid] == target){
            return mid;
        } else {
            if (arr[mid]<target){
                first = mid + 1;
            }else { 
                last = mid-1
            }
        }
    }

    return "the target was not found"

}

//some tests
var arr1 = [0,1,2,3,4,5,6,7,8];
var arr2 = [10,11,24,35,48,57];
var arr3 = [39,40,41,42,45,57,58];


console.log(BinarySearch(arr1,7));
console.log(BinarySearch(arr2,11));
console.log(BinarySearch(arr3,80));
