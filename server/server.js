const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require("massive");
const jwt = require('jsonwebtoken')
const loginCtrl = require('./controllers/loginCtrl')

const app = express();
app.use(bodyParser.json())
app.use(cors())



// var { Client } = require('pg')
// const client = new Client({ connectionString: process.env.DATABASE_URI })

// try {
//     client.connect((error, client, done) => {
//       if (error) console.log(('Failed to connect to database...' + error).error)
//       else console.log('Connected to database!'.bold.white)
//     })
//   } catch (err) {
//     console.log('Failed to Connect to Database: ', err)
//   }


app.post('/register_user', loginCtrl.register)

app.get('/login_user/:username/:password', loginCtrl.login)




app.listen('4000', console.log('ayyee listen fam on 4000'))


