const express = require('express')
const hbs = require('express-handlebars')

const pageRoutes = require('./routes/pages')
const apiRoutes = require('./routes/api')

const server = express()

// Middleware

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(express.json())

// Routes

server.use('/', pageRoutes)
server.use('/v1', apiRoutes)

module.exports = server
