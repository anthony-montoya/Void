import axios from 'axios'

const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP'
const REGISTER_USER = 'REGISTER_USER'

let initialState = {

}


export function registerUser(userInfo){
    console.log(userInfo)
    axios.post(`http://localhost:4000/register_user`, userInfo ).then(res => {
        console.log(res)
    })
    return {
        type: REGISTER_USER,
        action: userInfo

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




