const assert = require('assert');
const { binary_search } = require('../lib/binary.js');

describe('binary search algorithm', () => {

  it('should return the correct indexes', () => {
    const test = [1, 3, 5, 7, 9]
    assert.equal(binary_search(test, 5), 2);
    assert.equal(binary_search(test, 9), 4);
  });
});