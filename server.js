const app = require('./app')
const mongoose = require('mongoose')
const config = require('config')
const http = require('http')

const server = http.createServer(app)

const run = async function () {
  try {
    await mongoose.connect(config.get('db.uri'), {
      user: config.get('db.user'),
      pass: config.get('db.pass'),
      authSource: 'admin',
      useNewUrlParser: true
    })
    console.log('Database is connected')
    server.listen(config.get('port'))
    console.log(`Server is running on port ${config.get('port')}.`)
  } catch (err) {
    console.log(err)
  }
}

run()
