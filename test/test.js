const assert = require('chai').assert
/* eslint-disable no-undef */
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
/* eslint-enable */
