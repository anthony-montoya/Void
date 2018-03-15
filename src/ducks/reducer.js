import axios from 'axios'

const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const USER_STATUS = 'USER_STATUS'

let initialState = {
    loggedInStatus: null,

}


export function registerUser(userInfo){
    let successFullRegistration = axios.post(`http://localhost:4000/register_user`, userInfo ).then(res => {
        if(res.data.error){
            alert(res.data.error)
        } else return res.data
    })
    return {
        type: REGISTER_USER,
        action: successFullRegistration
    }
   
}

export function login(userLogin){
    let authorizeUser = axios.get(`http://localhost:4000/login_user/${userLogin.vb_username}/${userLogin.password}`).then( res => {
        localStorage.setItem('authToken', res.data.token);
        if(res.data.error){
            alert('Invalid Username Or Password')
        } else return res.data.userData
    })

    return {
        type: LOGIN_USER,
        action: authorizeUser
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
        return Object.assign({}, state, {loggedInStatus: action.payload});
        case LOGIN_USER:
        return Object.assign({}, state, {userData: action.payload})


    }
    return state;

}

export default reducer




