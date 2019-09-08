const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)
const moment = require('moment');


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

function getFruits () {
  return db('fruit').select()
}

function createHive (hive) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'description': hive.explanation,
      'date_created': moment().format('MMMM Do YYYY, h:mm:ss a')
    })
}