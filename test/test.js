const assert = require('chai').assert
/* eslint-disable no-undef */
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
  describe('#indexOf()', () => {
    it('should return 2 when the value 3 is present', () => {
      assert.equal(2, [1, 2, 3].indexOf(3))
    })
  })
})
/* eslint-enable */
