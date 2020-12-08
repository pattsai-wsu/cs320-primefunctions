/* global maxPrimeSum */

describe('primefunctions2', function () {
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(10000) should take less than 75ms', function () {
      maxPrimeSum(10000);
      this.slow(100);
    });
    it('maxPrimeSum(100000) should take less than 3000ms', function () {
      maxPrimeSum(100000);
      this.slow(3000);
    });
  });
});
