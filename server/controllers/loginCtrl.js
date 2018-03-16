const jwt = require('jsonwebtoken')
const { client } = require('.././dbConnection.js')
const bcrypt = require('bcrypt')

module.exports = {
    register: (request, response) => {
        bcrypt.hash(request.body.password, 10, (err, hash) => {
            if (!err) {
                let checkIfUserExists = {
                    text: `SELECT * FROM users WHERE (email = $1 OR vb_username  = $2)`,
                    values: [request.body.email, request.body.vb_username]
                }
                let insertNewUser = {
                    text: `INSERT INTO users (vb_username, email, passwd, uplay) VALUES ($1, $2, $3, $4) RETURNING *`,
                    values: [request.body.vb_username, request.body.email, hash, request.body.uplay]
                }
                client.query(checkIfUserExists, (error, result) => {
                    if (!result.rows[0]) {
                        client.query(insertNewUser, (err, newUser) => {
                            if (newUser) {
                                console.log('Account ' + request.body.vb_username + ' has been registered.')
                                let token = jwt.sign({ name: 'auth_token', vb_username: newUser.rows[0].vb_username }, 'secret', { expiresIn: '15sec' })
                                response.status(200).send({ token, userData: newUser.rows[0] })
                            }
                            else if (err) {
                                console.log('Error registering user ' + request.body.vb_username + ' to the database.')
                                response.status(200).send({ error: 'Account could not be created. Try again later.' })
                            }
                        })
                    } else {
                        console.log('User ' + request.body.vb_username + ' already exists.')
                        response.status(200).send({ error: 'Email or Username is already in use' })
                    }
                })
            } else return null
        });





    },

    login: (req, res) => {
        let checkIfUserExists = {
            text: `select * from users where (vb_username = $1 OR email = $1)`,
            values: [req.params.vb_username]
        }

        client.query(checkIfUserExists, (err, result) => {
            if (result.rows[0]) {
                bcrypt.compare(req.params.password, result.rows[0].passwd, function (err, verified) {
                    if (verified) {
                        let token = jwt.sign({ name: 'auth_token', vb_username: req.params.vb_username }, 'secret', { expiresIn: '15sec' })
                        console.log('Token has been created for: ' + req.params.vb_username)
                        res.status(200).send({ token: token, userData: result.rows[0] });
                    }
                })
            } else res.status(200).send({ error: 'ERROR: USER DOES NOT EXIST' })
        })

    },

    authenticateToken: (req, res) => {
        jwt.verify(req.params.token, 'secret', (err, decoded) => {
            if (err) {
                res.status(200).send({ error: err })
            } else if (decoded) {
                let checkIfUserExists = {
                    text: `select * from users where (vb_username = $1 OR email = $1)`,
                    values: [decoded.vb_username]
                }
                client.query(checkIfUserExists, (error, result) => {
                    if (result.rows) {
                        console.log('Token Verified. Logging in ' + result.rows[0].vb_username)
                        res.status(200).send({ userData: result.rows[0] })
                    }
                })
            }
        });
    }



}