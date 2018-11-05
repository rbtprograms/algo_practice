const findSmallest = arr => {
  let smallest = arr[0];
  let smallest_index = 0;

  for(let i in arr) {
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  };

  return smallest_index;
};

module.exports = selectionSort = arr => {
  let result = [];
  while(arr.length) {
    let smallest = findSmallest(arr);
    result.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return result;
};