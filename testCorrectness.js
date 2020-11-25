// global primeGen, cumulativeSum, maxPrimeSum

describe('primefunctions', function () {
  describe('primeGen()', function () {
    it('primeGen(10) should return [ 2, 3, 5, 7 ]', function () {
      chai.expect(primeGen(10)).to.include.members([2, 3, 5, 7]);
    });
    it('primeGen(10) should be length 4', function () {
      chai.expect(primeGen(10)).to.have.lengthOf(4);
    });
    it('primeGen(20) should return [ 2, 3, 5, 7, 11, 13, 17, 19 ]', function () {
      chai.expect(primeGen(20)).to.include.members([2, 3, 5, 7, 11, 13, 17, 19]);
    });
    it('primeGen(20) should be length 8', function () {
      chai.expect(primeGen(20)).to.have.lengthOf(8);
    });
  });
  describe('cumulativeSum()', function () {
    it('cumulativeSum([1, 2, 3, 4]) should return [ 1, 3, 6, 10 ]', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.include.members([1, 3, 6, 10]);
    });
    it('cumulativeSum([1, 2, 3, 4]) should be length 4', function () {
      chai.expect(cumulativeSum([1, 2, 3, 4])).to.have.lengthOf(4);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) should return [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.include.members([10, 21, 33, 46, 60]);
    });
    it('cumulativeSum([10, 11, 12, 13, 14]) should be length 5', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.have.lengthOf(5);
    });
  });
});
