const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/:id', (req,res) => {
    db.getHiveData(req.params.id, req.app.connection)
    .then((hive) => {
        res.send(hive)
      })
})

module.exports = router