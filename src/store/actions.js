export function addTodo(task){
    return {type: 'ADD_TASK', payload: task}
}

export function deleteTodo(index){
    return {type: 'DELETE_TASK', payload: index}
}

export function updateContries(data){
    return {type: 'UPDATED_COUNTRIES', payload: data}
}