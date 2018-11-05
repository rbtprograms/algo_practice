#a file for a selection sort algo to prime for a quicksort algo
#arrays are good cause you can grab any random element at any time. 
#Linked lists can be stored easier, but you need one element to find the next. 
#So you need to start from the first to read any of them

def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
      if arr[i] < smallest:
        smallest = arr[i]
        smallest_index = i
    return smallest_index

def selectionSort(arr):
  newArr = []
  for i in range(len(arr)):
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  return newArr

print(selectionSort([5, 3, 6, 2, 10]))