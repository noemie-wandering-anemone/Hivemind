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
      'dateCreated': moment().format('Do MMMM YYYY, h:mm:ss a'),
      'endDate': endDate(hive.duration),
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

function endDate(duration) {
  let startDate = moment().format('Do MMMM YYYY')
  let num = Number(duration)
  let endDate = moment(startDate, 'Do MMMM YYYY').add(num, 'days')
  return endDate.format('MMMM Do YYYY')
}