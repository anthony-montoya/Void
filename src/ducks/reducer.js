import axios from 'axios'

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'

let initialState = {
    
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

function reducer(state = initialState , action){
    switch(action.type){
         case REGISTER_USER:
         return 

    }
    return state;

}

export default reducer




