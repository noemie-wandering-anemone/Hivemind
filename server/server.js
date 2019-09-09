const path = require('path')
const express = require('express')

const formRoutes = require('./routes/form')
const hiveRoutes = require('./routes/hive')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/v1/form', formRoutes)
server.use('/api/v1/hive', hiveRoutes)

module.exports = server
