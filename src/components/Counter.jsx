import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
    function handleIncrement(){
        props.dispatch({type: 'INCREMENT'})
    }
    function handleDecrement(){
        props.dispatch({type: 'DECREMENT'})
    }
    function handleReset(){
        props.dispatch({type: 'RESET'})
    }
  return (
    <div className='betterview'>
        <h2>Counter Value {props.counter.count}</h2>
        <button onClick={handleIncrement} className='btn increment'>Increment</button>
        <button onClick={handleDecrement} className='btn decrement'>Decrement</button>
        <button onClick={handleReset} className='btn reset'>Reset</button>
    </div>
  )
}

export default connect(function(store){return store})( Counter );