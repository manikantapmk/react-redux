import React from 'react'
import { connect } from 'react-redux'

const Score = (props) => {
    console.log(props);
    function getScore(balls){
        var wickets = 0;
        var runs = 0;
        var score = `${runs}/${wickets}`;
        balls.forEach((b)=>{
            if(b === 'wk'){
                wickets++;
            } else{
                if(b === 'wd' || b === 'nb' || b === 'by'|| b === 'lb'){
                    runs = runs + 1;
                } else{
                    runs = runs + b;
                }
            }
        })
        return `${runs}/${wickets}`;
    }
  return (
    <div className='betterview'>
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 0})}}>0</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 1})}}>1</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 2})}}>2</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 3})}}>3</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 4})}}>4</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 5})}}>5</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 6})}}>6</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 'wd'})}}>wd</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 'nb'})}}>nb</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 'by'})}}>by</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 'lb'})}}>lb</button>&nbsp;&nbsp;&nbsp;
        <button  onClick={()=>{props.dispatch({type: 'ADD_BALL', payload: 'wk'})}}>wk</button>&nbsp;&nbsp;&nbsp;
        <h1>score: {getScore(props.score.balls)}</h1>
    </div>
  )
}

export default connect(store=>store) (Score);