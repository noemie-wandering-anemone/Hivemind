module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getFruits: getFruits
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
  getFruits
}

let fruits = ['banana', 'apple', 'feijoa']

function getFruits () {
  return Promise.resolve(fruits)
}
