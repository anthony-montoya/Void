const jwt = require('jsonwebtoken')
const {client} = require('.././dbConnection.js')
const bcrypt = require('bcrypt')
 
 module.exports = {
    register :  (req, res) => {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(!err){
                    let checkIfUserExists = {
                        text: `SELECT * FROM users WHERE (email = $1 OR vb_username  = $2)`,
                        values: [req.body.email, req.body.vb_username]
                    }
                    let insertNewUser = {
                        text: `INSERT INTO users (vb_username, email, passwd, uplay) VALUES ($1, $2, $3, $4) RETURNING *`,
                        values: [req.body.vb_username, req.body.email, hash, req.body.uplay]
                    }
                    client.query(checkIfUserExists, (error, result) => {
                        if(!result.rows[0]){
                            client.query(insertNewUser, (err, result) => {
                                res.status(200).send({success: 'Account Registered!'})
                            })
                        } else {
                            res.status(200).send({error: 'Email or Username is already in use'})
                        } 
                    })
            } else return null
        });
          




    },

    login : (req, res) => {
        let checkIfUserExists = {
            text: `select * from users where (vb_username = $1 OR email = $1)`,
            values: [req.params.username]
        }

        client.query(checkIfUserExists, (err, result) => {
            if(result.rows[0]){
                bcrypt.compare(req.params.password, result.rows[0].passwd, function(err, verified) {
                    if(verified){
                        let token = jwt.sign({ data: 'authToken'}, 'secret', { expiresIn: '15sec' })
                        console.log('TOKEN MADE')
                        res.status(200).send({token: token, userData: result.rows[0]});
                    } else res.status(200).send({error: 'Please Enter A Valid Username and Password'})
                }) 
            } 
        })
        
    },
    authenticateToken: (req, res) => {
        jwt.verify(req.params.token, 'secret', (err, decoded) => {
            if(err){
                res.status(200).send({err : err})
            } else { 
                res.status(200).send({success : decoded}) //Logged in son
                console.log("Token Verified")
            }
          });
    }

    
    
 }