import axios from 'axios'

let initialState = {
    login: true,
}

function reducer(state = initialState , action){
    switch(action.type){
        

    }
    return state;

}

export default reducer






// export function getAllPokemon(){
//     const request = axios.get('http://pokeapi.co/api/v2/pokemon/?limit=500')
//     console.log(request)
//     return {
//         type: ALL_POKEMON,
//         payload: request
//     }
// }





// function reducer(state = initialState , action){
//     switch(action.type){
//         case ALL_POKEMON + '_FULFILLED':
//             return Object.assign({}, state, {allPokemon: action.payload.data})
//         case SELECTED_POKEMON +'_FULFILLED':
//             return  Object.assign({}, state, {pokemonTeam: [action.payload.data, ...state.pokemonTeam]})

//     }
//     return state;

// }