const assert = require('assert')

const kebabToCamelCase = require('./kebabToCamelCase')

describe('kebabToCamelCase', () => {
  describe('took a string in camel-case and converts it to camelCase', () => {
    it('should convert "kebab-case" to "camelCase"', () => {
      assert.equal(kebabToCamelCase('name-of-file'), 'nameOfFile')
    })

    it('should convert "kebab-case" to "camelCase" and it may have a lot of words', () => {
      assert.equal(
        kebabToCamelCase('name-of-file-of-your-friend-who-is-a-cool-guy'), 'nameOfFileOfYourFriendWhoIsACoolGuy')
    })

    it('should return entry if it just one word', () => {
      assert.equal(kebabToCamelCase('name'), 'name')
    })

    it('should handle numbers and special characters as well as letters', () => {
      assert.equal(kebabToCamelCase('123name$-some-poop'), '123name$SomePoop')
    })

    it('should not be copypasted from stakoverflow :) ', () => {
      assert.ok(true)
    })
  })
})



