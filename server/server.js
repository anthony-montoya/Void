require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://admin:test123@ds243085.mlab.com:43085/void_dbd', { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('HIT')
});


const port = process.env.PORT
app.listen(port, () => console.log(`Reporting for duty on port ${port}`))