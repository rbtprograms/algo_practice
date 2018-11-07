module.exports = quicksort = arr => {
  if(arr.length < 2) return arr;
  else {
    let pivot = arr[0];
    let less = arr.filter(num => num < pivot);
    let greater = arr.filter(num => num > pivot);
    return quicksort(less).concat(pivot, quicksort(greater));
  }
}