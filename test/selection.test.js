const assert = require('assert');
const selectionSort = require('../lib/selection.js');

describe('selection sort algorithm', () => {

  it('should sort an array', () => {
    const test = [5, 3, 6, 2, 10]
    assert.deepEqual(selectionSort(test), [2, 3, 5, 6, 10]);
  });
});