require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require("massive");
const jwt = require('jsonwebtoken')
const loginCtrl = require('./controllers/loginCtrl')

const app = express();
app.use(bodyParser.json())
app.use(cors())



var { Client } = require('pg')
console.log(process.env.DATABASE_URI)
//postgres://gpspagsoacswgw:3d394f39d802306192923a07a168928658d4dab713f75d2b30a33897597e8874@ec2-23-21-236-249.compute-1.amazonaws.com:5432/df7e37aantqni4?ssl=true
const client = new Client({ connectionString: process.env.DATABASE_URI })

try {
    client.connect((error, client, done) => {
      if (error) console.log(('Failed to connect to database...' + error).error)
      else console.log('Connected to database!'.bold.white)
    })
  } catch (err) {
    console.log('Failed to Connect to Database: ', err)
  }


app.post('/register_user', loginCtrl.register)

app.get('/login_user/:username/:password', loginCtrl.login)
app.get('/authenticateAuthToken/:token', loginCtrl.authenticateToken)




app.listen('4000', console.log('ayyee listen fam on 4000'))


