const config = require('../knexfile').development
const connection = require('knex')(config)
const moment = require('moment');

function getHive(id, db = connection) {
  return db('hives')
    .where('id', id).first()
}

function createHive (hive, db = connection) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'description': hive.explanation,
      'dateCreated': moment().format('Do MMMM YYYY'),
      'endDate': endDate(hive.duration),
    })
}

function endDate(duration) {
  let startDate = moment().format('Do MMMM YYYY')
  let num = Number(duration)
  let endDate = moment(startDate, 'Do MMMM YYYY').add(num, 'days')
  return endDate.format('MMMM Do YYYY')
}


module.exports = {
  createHive,
  getHive
}