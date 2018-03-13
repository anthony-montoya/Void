import axios from 'axios'

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'

let initialState = {
    
}


export function registerUser(userInfo){
    axios.post(`http://localhost:4000/register_user`, userInfo ).then(res => {
        console.log(res)
    })
    return {
        type: REGISTER_USER,
        action: userInfo

    }
   
}

export function login(userLogin){
    let config = {
        username: userLogin.username,
        password: userLogin.password
    }
    axios.get(`http://localhost:4000/login_user/:${config}`).then( res => {
        console.log(res)
    })

    return {
        type: LOGIN_USER,
        action: ''
    }
}



function reducer(state = initialState , action){
    switch(action.type){
         case REGISTER_USER:
         return 

    }
    return state;

}

export default reducer




