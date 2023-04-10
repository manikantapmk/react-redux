import React from 'react'
import { connect } from 'react-redux'
import { updateContries } from '../store/actions';

const Contries = (props) => {
    console.log(props.contries);
    React.useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=> res.json())
        .then(data=>props.dispatch(updateContries(data)))
    },[])
  return (
    <div>
       
    </div>
  )
}

export default connect(function(state){ return state})( Contries )