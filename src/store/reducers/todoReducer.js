import { ADD_TASK, DELETE_TASK } from "../actiontype";

const initialState = {
    todos : ['rent', 'bills', 'payments']
}

function todoReducer(state=initialState, action){
    if(action.type === ADD_TASK){
        if(action.payload ==  "") {
            alert(" Field Not Empty")
            return {...state}
        }
        else return{
            ...state,
            todos: [...state.todos, action.payload],
            
        }
    }
    if(action.type === DELETE_TASK){

        var temp = [...state.todos];
        temp.splice(action.payload,1)
        return {
            ...state,
            todos: [...temp]
        }
    }
    return state;
}

export default todoReducer;