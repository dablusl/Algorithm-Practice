#divide and conquer
#binary search in an array of ascending values
#returns index where the value is found

def BinarySearch (arr, target):
    first = 0
    last = len(arr) - 1

    while first <= last:
        mid = (first + last)//2     #floor division operator in python

        if arr[mid] == target :
            return mid
        elif arr[mid] < target :
            first = mid + 1
        else :
            last = mid -1
    
    return "the target was not found"

#some tests
arr1 = [0,1,2,3,4,5,6,7,8]
arr2 = [10,11,24,35,48,57]
arr3 = [39,40,41,42,45,57,58]

print(BinarySearch(arr1,7))
print(BinarySearch(arr2,11))
print(BinarySearch(arr3,80))