/* global maxPrimeSum */

describe('primefunctionsOriginal', function () {
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
    /*
    it('maxPrimeSum(10) = [5, 2]', function () {
      chai.expect(maxPrimeSum(10)).to.deep.equal([5, 2]);
    });
    it('maxPrimeSum(100) = [41, 6]', function () {
      chai.expect(maxPrimeSum(100)).to.deep.equal([41, 6]);
    });
    it('maxPrimeSum(1000) = [953, 21]', function () {
      chai.expect(maxPrimeSum(1000)).to.deep.equal([953, 21]);
    });
     */
  });
});
