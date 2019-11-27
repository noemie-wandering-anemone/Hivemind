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
      'name': bee.name,
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
  return db('hives')
    .join('bees', 'hives.creator_id', 'bees.id')
    .where('hives.id', id).first()
}

function addBuzz(buzz, id) {
  console.log(buzz)
  return db('buzzes')
    .insert({
      content: buzz.content,
      hive_id: buzz.hive_id,
      bee_id: id,
    })
}

function getBuzzes (hive_id) {
  return db('buzzes')
    .join('bees', 'buzzes.bee_id', 'bees.id')
    .where('hive_id', hive_id)
}

function endDate(duration) {
  let startDate = moment().format('Do MMMM YYYY')
  let num = Number(duration)
  let endDate = moment(startDate, 'Do MMMM YYYY').add(num, 'days')
  return endDate.format('MMMM Do YYYY')
}