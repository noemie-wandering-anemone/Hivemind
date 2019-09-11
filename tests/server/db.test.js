const testEnv = require('./test-environment')
const db = require('../../server/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))


test('getHiveData gets a single hive', () => {
  const expected = 'test hive 1'
  return db.getHiveData(3, testDb)
    .then(user => {
      const actual = hive.subject
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
