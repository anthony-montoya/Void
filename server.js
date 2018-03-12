const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors')
const massive = require("massive");

const app = express();
app.use(bodyParser.json())
app.use(cors())

massive({
    host: 'ec2-23-21-236-249.compute-1.amazonaws.com',
    port: '5432',
    database: 'df7e37aantqni4',
    user: 'gpspagsoacswgw',
    password: '3d394f39d802306192923a07a168928658d4dab713f75d2b30a33897597e8874',  
    ssl: true
}).then(function (db) {
    app.set('db', db)
})



app.post('/register_user', (req, res) => {
    const {username, email, password, uplay} = req.body;
    req.app.get('db').create_user([username, email, password, uplay]).then( response => {
        res.status(200).send(console.log('ayee'))
    } )

})




app.listen('4000', console.log('ayyee listen fam on 4000'))


