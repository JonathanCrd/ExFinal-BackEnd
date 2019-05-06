const mongoose = require('mongoose')
//const config = require('../config.js')

// var connectionURL = process.env.DB_CONNECTION_STRING || config.connectionURL

if(process.env.NODE_ENV === 'production'){
  var connectionURL = process.env.DB_CONNECTION_STRING;
}
else{
  const config = require('../config.js')
  var connectionURL = config.connectionURL;
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
