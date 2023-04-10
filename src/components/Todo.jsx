import React, { useState } from 'react'
import { connect } from 'react-redux';

import { addTodo, deleteTodo } from '../store/actions';


const Todo = (props) => {
    const [newTask, setNewTask] = useState('');
    const todoReset = ()=>{
        setNewTask("")
    }
    function addTask(){
        props.dispatch(addTodo(newTask))
        props.dispatch(todoReset)
        
    }
    function deleteTask(i){
        props.dispatch(deleteTodo(i))
    }
  return (
    <div className='betterview'>
        <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} value={newTask} />
        <button onClick={addTask} className='btn'>Add Task</button>
        {
            props.todos.todos.map((todo, i)=>{
                return <li key={i}>
                    <table>
                    <tr>
                        <td> {todo}</td>
                        <td> <button onClick={()=>{deleteTask(i)}}>Delete Task</button></td>
                    </tr>
                    </table>
                   
                   
                </li>
            })
        }
    </div>
  )
}

export default connect(function(state){ return state})( Todo )