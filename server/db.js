const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)
const moment = require('moment');


module.exports = {
  createHive: createHive,
  getHiveData: getHiveData,
  addBuzz: addBuzz,
  getBuzzes: getBuzzes,
}

function createHive (hive) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'description': hive.explanation,
      'date_created': moment().format('MMMM Do YYYY, h:mm:ss a')
    })
}

function getHiveData (id) {
  return db('hives').where('id', id).first()
}

function addBuzz (buzz) {
  return db('buzzes')
    .insert({
      ...buzz
    })
}

function getBuzzes (hive_id) {
  return db('buzzes').where('hive_id', hive_id)
}