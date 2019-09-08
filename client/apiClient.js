import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function createHive (hive) {
  return request.post(rootUrl + '/form')
  .send(hive)
  .catch(e => {
    console.log('error adding hive', e)
  })
}
