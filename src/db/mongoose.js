const mongoose = require('mongoose')
const config = require('../config.js')

var connectionURL = process.env.DB_CONNECTION_STRING || config.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
