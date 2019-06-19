const assert = require('assert')

const calculator = require('./calculator')

describe('calculator', () => {
  describe('takes a string of expression na calculate it basically, and return a number', () => {
    it('should sum two numbers', () => {
      assert.equal(calculator('2+3'), 5)
    })

    it('should sum two big numbers numbers', () => {
      assert.equal(calculator('1232+323424'), 324656)
    })

    it('should substract two big numbers', () => {
      assert.equal(calculator('1232-323424'), -322192)
    })

    it('should divide two big numbers', () => {
      assert.equal(calculator('1232*323424'), 398458368)
    })

    it('should multiply two big numbers', () => {
      assert.equal(calculator('48/8'), 6)
    })


    // optional
    // it('should calculate more than two  numbers', () => {
    //   assert.equal(calculator('32+12+2+3'), 49)
    // })

    // it('should calculate decimals as well', () => {
    //   assert.equal(calculator('32.2+12.3+2.23+3.56'), 50.29)
    // })
  })
})