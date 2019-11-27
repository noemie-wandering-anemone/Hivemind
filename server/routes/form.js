const express = require('express')

const db = require('../db')

const router = express.Router()

//routes

  router.post('/', (req, res) => {
    db.addBee(req.body)
      .then((ids) => {
        const id = ids[0]
        db.createHive(req.body, id)
          .then((result) => {
            res.status(201).send('success ' + result)
          })
      })
  })

module.exports = router