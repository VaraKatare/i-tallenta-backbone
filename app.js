const middleware = require('./core/middleware')
const route = require('./core/api')
const express = require('express')
const path = require('path')
const app = express()

app.use('/files', express.static(path.join(__dirname, 'files')))

app.use(middleware)

app.use(route)

module.exports = app
