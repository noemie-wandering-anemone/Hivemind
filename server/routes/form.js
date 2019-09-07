const express = require('express')

const db = require('../db')

const router = express.Router()

//routes

  router.post('/form', (req, res) => {
    return db.createHive(req.body)
  })

module.exports = router