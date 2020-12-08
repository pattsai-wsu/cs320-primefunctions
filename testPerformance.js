/* global maxPrimeSum */

describe('primefunctions2', function () {
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(10000) should take less than 75ms', function () {
      this.slow(100);
      maxPrimeSum(10000);
    });
    it('maxPrimeSum(100000) should take less than 3000ms', function () {
      this.slow(2000);
      maxPrimeSum(100000);
    });
  });
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(10000) = [ 9521, 65 ]', function () {
      chai.expect(maxPrimeSum(10000)).to.deep.equal([9521, 65]);
    });
    it('maxPrimeSum(100000) = [ 92951, 183 ]', function () {
      chai.expect(maxPrimeSum(100000)).to.deep.equal([92951, 183]);
    });
  });
});
