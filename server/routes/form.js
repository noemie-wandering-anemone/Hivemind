const express = require('express')

const db = require('../db')

const router = express.Router()

//routes

  router.post('/', (req, res) => {
    db.createHive(req.body)
    .then(() => {
        res.status(201).send('success')
      })
  })

module.exports = router