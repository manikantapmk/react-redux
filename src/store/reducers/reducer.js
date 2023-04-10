import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import studentReducer from "./studentReducer";
import contriesReducer from "./contriesReducer";
import {combineReducers} from 'redux'

var reducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    students: studentReducer,
    contries: contriesReducer,
})

export default reducer;
