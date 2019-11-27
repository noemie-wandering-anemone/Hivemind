import request from 'superagent'

export function addPost(post, id) {
    return request.post('/v1/hive/' + id)
    .send(post)
    .catch(e => {
      console.log('Error adding post', e)
    })
}