import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import studentReducer from "./studentReducer";
import contriesReducer from "./contriesReducer";
import {combineReducers} from 'redux'
import scoreReducer from "./score.reducer";



var reducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    students: studentReducer,
    contries: contriesReducer,
    score: scoreReducer,
})

export default reducer;
