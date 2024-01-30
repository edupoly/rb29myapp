import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/actions'
function Todolist(props) {
    console.log("Todolist rendered")
    const [newtodo, setnewtodo] = React.useState('')
  return (
    <div className='border container border-2 border-success p-2 m-2'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
        <button onClick={()=>{props.addTask(newtodo)}}>ADD TODO </button>
        <ul>
            {
                props.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){
    return state.t
}
function mapDisatchToProps(dispatch){
    return {
        addTask:(nt)=>{dispatch(addTodo(nt))}
    }
}
export default connect(mapStateToProps,mapDisatchToProps)( Todolist)