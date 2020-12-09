/* global maxPrimeSum */

describe('primefunctionsOptimized2', function () {
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(10000) should take less than 85ms', function () {
      this.timeout(85);
      this.slow(0);
      maxPrimeSum(10000);
    });
    it('maxPrimeSum(100000) should take less than 8500ms', function () {
      this.timeout(8500);
      this.slow(0);
      maxPrimeSum(100000);
    });
  });
});
