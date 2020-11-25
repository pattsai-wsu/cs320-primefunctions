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
});
