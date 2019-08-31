const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  res.redirect('/ask')
})

router.get('/ask', (req, res) => {
  res.render('ask')
})

router.post('/ask', (req, res) => {
  console.log(req.body)
  return db.createHive(req.body)
    .then(id => res.redirect('/hive/' + id))
})

router.get('/hive/:id', (req, res) => {
  res.render('hive')
})

module.exports = router