var should = chai.should()
describe('function fizzbuzz', function () {
  it('should return \'Fizz\' if input is multiple of 3', function () {
    var result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  it('should return \'Buzz\' if input is multiple of 5', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should return \'FizzBuzz\' if input is multiple of 3 and 5', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return input number if it is not multiple of 3 or 5', function () {
    var result = fizzBuzz(13)
    result.should.be.equal(13)
  })

}) 