const path = require('path')
const express = require('express')

const fruitRoutes = require('./routes/fruits')
const formRoutes = require('./routes/form')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/form', formRoutes)

module.exports = server
