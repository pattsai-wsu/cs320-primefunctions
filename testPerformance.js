/* global primeGen, cumulativeSum, maxPrimeSum */

describe('primefunctions2', function () {
  describe('maxPrimeSum()', function () {
    it('maxPrimeSum(100) = [ 41, 6 ]', function () {
      chai.expect(maxPrimeSum(100)).to.include.members([41, 6]);
      // chai.expect(primeGen(100)).to.deep.equal([41, 6]);
      // chai.expect(primeGen(10)).to.include.members([2, 3, 5, 7]);
    });
    it('maxPrimeSum(100) = [ 41, 6 ]', function () {
      chai.expect(maxPrimeSum(100).this.slow(10000));
    });
    /*
    it('primeGen(100000) = [ 92951, 183 ]', function () {
      chai.expect(primeGen(100000)).to.deep.equal([92951, 183]);
      // chai.expect(primeGen(20)).to.include.members([2, 3, 5, 7, 11, 13, 17, 19]);
    });
     */
  });
});
