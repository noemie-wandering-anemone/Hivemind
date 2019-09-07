module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getFruits: getFruits,
  createHive: createHive
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

function createHive (hive, db = connection) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'description': hive.explanation,
      'date_created': moment().format('MMMM Do YYYY, h:mm:ss a')
    })
}