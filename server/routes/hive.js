const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id', (req,res) => {
    db.getHiveData(req.params.id, req.app.connection)
    .then((hive) => {
        res.send(hive)
      })
})

router.post('/buzz', (req, res) => {
  db.addBuzz(req.body)
  .then((result) => {
    console.log(result)
    res.status(201).send('success ' + result)
  })
})

module.exports = router