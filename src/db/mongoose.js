const mongoose = require('mongoose')
const config = require('../config.js')

var connectionURL = process.env.CONNECTIONURL || config.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
