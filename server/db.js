const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)
const moment = require('moment');


module.exports = {
  addBee: addBee,
  createHive: createHive,
  getHiveData: getHiveData,
  addBuzz: addBuzz,
  getBuzzes: getBuzzes,
}

function addBee(bee) {
  return db('bees')
    .insert({
      'name': bee.creator,
      'email': bee.email,
      'sendHive': bee.toEmail,
    })
}

function createHive(hive, id) {
  return db('hives')
    .insert({
      'subject': hive.question,
      'dateCreated': moment().format('Do MMMM YYYY, h:mm:ss a'),
      'creator_id': id,
      'description': hive.explanation,
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