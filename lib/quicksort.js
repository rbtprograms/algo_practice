module.exports = quicksort = arr => {
  if(arr.length < 2) return arr;
  else {
    let pivot = arr[0], less = [], greater = [];
    for(let i of arr) {
      if(i < pivot) less.push(i);
      if(i > pivot) greater.push(i);
    }
    return quicksort(less).concat(pivot, quicksort(greater));
  }
}