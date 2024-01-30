import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
  console.log("Counter rendered")
  return (
    <div className='border container border-2 border-info p-2'>
        <h1>Counter:{props.count}</h1>
        <button onClick={props.inc}>Increment</button>
        <button onClick={props.dec}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.c
}
function mapDisatchToProps(dispatch){
  return {
    inc:()=>{dispatch({type:'INC'})},
    dec:()=>{dispatch({type:'DEC'})}
  }
}
export default connect(mapStateToProps,mapDisatchToProps)(Counter)