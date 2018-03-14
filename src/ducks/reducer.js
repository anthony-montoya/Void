import axios from 'axios'

const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const USER_STATUS = 'USER_STATUS'

let initialState = {
    loggedInStatus: false
}


export function registerUser(userInfo){
    let successFullRegistration = axios.post(`http://localhost:4000/register_user`, userInfo ).then(res => {
        return res.data
    })
    return {
        type: REGISTER_USER,
        action: successFullRegistration

    }
   
}

export function login(userLogin){
    let username = userLogin.username 
    let password = userLogin.password
    let authToken = axios.get(`http://localhost:4000/login_user/${username}/${password}`).then( res => {
        return localStorage.setItem('authToken', res.data);
    })

  
    return {
        type: LOGIN_USER,
        action: authToken
    }
}

export function userLoginStatus(status){
    return{
        type: USER_STATUS,
        payload: status
    }
}



function reducer(state = initialState , action){
    switch(action.type){
        case USER_STATUS:
        console.log(action.payload, 'reducer')
        return Object.assign({}, state, {loggedInStatus: action.payload});

    }
    return state;

}

export default reducer




