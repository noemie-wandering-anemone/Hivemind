const config = require('../knexfile').development
const connection = require('knex')(config)
const moment = require('moment');

function createHive (hive, db = connection) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'description': hive.explanation,
      'date_created': moment().format('MMMM Do YYYY, h:mm:ss a')
    })
}

function getHive(id, db = connection) {
  return db('hives')
    .where('id', id).first()
}

module.exports = {
  createHive,
  getHive
}