const initialState = {
    balls : [],
    mabs: 8767
}

function scoreReducer(state = initialState,action){
    if(action.type === 'ADD_BALL'){
        return {
            ...state,
            balls: [...state.balls, action.payload]
        }
    }
    return state;
}

export default scoreReducer;
