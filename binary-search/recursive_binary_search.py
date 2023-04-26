#binary search in an array of ascending values
#returns true or false if value exists in the array

def RecursiveBinarySearch(arr, target):
    if len(arr) == 0:
        return False
    else :
        mid = len(arr)//2

        if arr[mid] == target:
            return True
        else:
            if arr[mid] < target:
                return RecursiveBinarySearch(arr[mid+1:], target)
            else :
                return RecursiveBinarySearch(arr[:mid-1], target)


#some tests
arr1 = [0,1,2,3,4,5,6,7,8]
arr2 = [10,11,24,35,48,57]
arr3 = [39,40,41,42,45,57,58]

print(RecursiveBinarySearch(arr1,7))
print(RecursiveBinarySearch(arr2,11))
print(RecursiveBinarySearch(arr3,80))