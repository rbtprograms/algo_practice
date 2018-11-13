const assert = require('assert');
const binarySearch = require('../lib/binary.js');
const selectionSort = require('../lib/selection.js');
const factorial = require('../lib/recursion.js');
const quickSort = require('../lib/quickSort.js');

describe('quickSort', () => {

  it('should sort an array', () => {
    let test = [5, 3, 6, 2, 10];
    assert.deepEqual(quickSort(test), [2, 3, 5, 6, 10]);
    test = [3, 3, 3, 8, 1,];
    assert.deepEqual(quickSort(test), [1, 3, 3, 3, 8]);
  });
});

describe('binary search algorithm', () => {

  it('should return the correct indexes', () => {
    const test = [1, 3, 5, 7, 9]
    assert.equal(binarySearch(test, 5), 2);
    assert.equal(binarySearch(test, 9), 4);
  });
});

describe('selection sort algorithm', () => {

  it('should sort an array', () => {
    const test = [5, 3, 6, 2, 10]
    assert.deepEqual(selectionSort(test), [2, 3, 5, 6, 10]);
  });
});

describe('recursion test', () => {

  it('should be able to find factorials rEcUrSiVeLy(spoOoOoOoKy', () => {
    assert.equal(factorial(5), 120);
    assert.equal(factorial(6), 720);
  });
});
