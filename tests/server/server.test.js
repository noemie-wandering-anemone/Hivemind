const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../../server/db', () => ({
  getHiveData: (id) => Promise.resolve(
    {id: id, subject: 'test subject', dateCreated: 'test date', creator_id: 'test creator', description: 'test description', endDate: 'test end date'}
  ),
  // getUsers: () => Promise.resolve([
  //   {id: 2, name: 'test user 2', email: 'test2@user.nz'},
  //   {id: 4, name: 'test user 4', email: 'test4@user.nz'}
  // ])
}))

const server = require('../../server/server')

test('GET /:id', () => {
  return request(server)
    .get('/api/v1/hive/1')
    .expect(200)
    .then((res) => {
      expect(res.body.subject).toBe('test subject')
    })
    .catch(err => expect(err).toBeNull())
})

