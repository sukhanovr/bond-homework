const assert = require('assert')
const storage = require('./storage')

describe('storage', () => {
  describe('it should return a function that allows to put in and get from storage some values, using closure', () => {
    let store = null;

    beforeEach(() => {
      store = storage()
    })

    it('should save value using key and value', () => {
      store('name', 'John Wick')

      assert.deepEqual(store(), {'name': 'John Wick'})
    })

    it('should save numerous values using key and value', () => {
      store('name', 'John Wick')
      store('age', 54)

      assert.deepEqual(store(), {'name': 'John Wick', 'age': 54})
    })

    it('should return stored data as object if no params have been sent', () => {
      assert.deepEqual(store(), {})

      store('name', 'John Wick')
      store('age', 54)

      assert.deepEqual(store(), {'name': 'John Wick', 'age': 54})
    })

    it('should return value if only key provided', () => {
      store('name', 'John Wick')
      store('age', 54)

      assert.equal(store('name'), 'John Wick')
    })

    it('should return "Not found" if there no such key', () => {
      store('name', 'John Wick')
      store('age', 54)

      assert.equal(store('blabla'), 'Not found')
    })

    it('should have clear method on it, and it suppose to clear the storage', () => {
      assert.deepEqual(store(), {})

      store('name', 'John Wick')
      store('age', 54)

      store.clear()

      assert.deepEqual(store(), {})
    })
  })
})