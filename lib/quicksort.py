#divide and conquer stuff
def sum(list):
  if list == []: 
    return 0
  return list[0] + sum(list[1:])

print(sum([1, 2, 3, 4]))

def count(list):
  if list == []:
    return 0
  return 1 + count(list[1:])

print(count([1, 2, 3, 4]))

def quicksort(array):
  if len(array) < 2:
    return array
  else:
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot]
    greater = [i for i in array[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)
  
print(quicksort([10, 23, 8, 1, 54, 9, 4, 76, 13, 19, 88, 52, 100, 3]))