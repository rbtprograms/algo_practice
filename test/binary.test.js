const assert = require('assert');
const binarySearch = require('../lib/binary.js');

describe('binary search algorithm', () => {

  it('should return the correct indexes', () => {
    const test = [1, 3, 5, 7, 9]
    assert.equal(binarySearch(test, 5), 2);
    assert.equal(binarySearch(test, 9), 4);
  });
});