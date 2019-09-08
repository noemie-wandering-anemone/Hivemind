const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)
const moment = require('moment');


module.exports = {
  createHive: createHive,
  getHiveData: getHiveData,
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