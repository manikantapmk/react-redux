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
    if(action.type === 'DELETE_COUNTRY') {
        const newCountries = state.countries.filter((country)=> country.numericCode !== action.payload)
        return {
            ...state,
            countries: newCountries
            
        }
    }
    return state
}

export default contriesReducer;