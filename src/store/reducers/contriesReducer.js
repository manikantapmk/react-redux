import { UPDATED_COUNTRIES } from "../actiontype";

const initialState = {
    countries: []
}

function contriesReducer(state= initialState, action){
    if(action.type === UPDATED_COUNTRIES){
        return{
            ...state,
            countries: [...action.payload]
        }
    }
    return state
}

export default contriesReducer;