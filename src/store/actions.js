
export function addTodo(task){
    return {type: 'ADD_TASK', payload: task}
}


export function deleteTodo(index){
    return {type: 'DELETE_TASK', payload: index}
}


export function getContries(){
    return (dispatch)=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=> res.json())
    .then(data=>{dispatch({type: 'UPDATED_COUNTRIES', payload: data})})
    }
}