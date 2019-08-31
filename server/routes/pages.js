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


module.exports = router