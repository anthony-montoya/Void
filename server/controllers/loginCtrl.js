const jwt = require('jsonwebtoken')

 
 module.exports = {
    register :  (req, res) => {
        const {username, email, password, uplay} = req.body;
        req.app.get('db').create_user([username, email, password, uplay]).then( response => {
            res.status(200).send('User logged in')
        } )
    
    },

    login : (req, res) => {
        var token = jwt.sign({
            data: 'authToken'
          }, 'secret', { expiresIn: '25sec' })
        return res.status(200).send(token)      
        
    },

    authenticateToken: (req, res) => {
        jwt.verify(req.params.token, 'secret', (err, decoded) => {
            if(err){
                res.status(200).send({err : err})
            } else { 
                res.status(200).send({success : decoded}) //Logged in son
            }
          });
    }

    
    
 }