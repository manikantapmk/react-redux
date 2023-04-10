import React from 'react'
import { connect } from 'react-redux'
import { getContries } from '../store/actions';
import { DELETE_COUNTRY } from '../store/actiontype';

const Contries = (props) => {
    console.log(props.contries);
    React.useEffect(()=>{
        props.dispatch(getContries())
    },[])

    function deleteCountry(id){
      props.dispatch({type: DELETE_COUNTRY, payload: id})
    } 
  return (
    <div>
       <ul>
        {
          props.contries.countries.map((country)=>{
            return( <table>
              <tr>
                <td>
                {
                country.name
              }
                </td>
                <td>
                <button onClick={()=>deleteCountry(country.numericCode)}>{`Delete ${country.name}`}</button>
                </td>
              </tr>
            </table>
            )
            
          })
        }
       </ul>
    </div>
  )
}

export default connect(function(state){ return state})( Contries )