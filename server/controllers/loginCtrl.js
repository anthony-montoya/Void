 module.exports = {
    register :  (req, res) => {
        const {username, email, password, uplay} = req.body;
        req.app.get('db').create_user([username, email, password, uplay]).then( response => {
            res.status(200).send('User logged in')
        } )
    
    },

    login : (req, res) => {
        console.log(req.body)
    }
}