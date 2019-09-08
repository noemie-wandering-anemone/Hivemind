import request from 'superagent'

const rootUrl = '/api/v1'

export function createHive (hive) {
  return request.post(rootUrl + '/form')
  .send(hive)
  .catch(e => {
    console.log('error adding hive', e)
  })
}

export function getHiveData (id) {
  return request.get(rootUrl + '/hive/' + id)
    .then(res => {
      return res.body
    })
}