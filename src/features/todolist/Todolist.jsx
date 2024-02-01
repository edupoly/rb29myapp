import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, newTodo } from './todoSlice';

function Todolist() {
    var todos = useSelector(state=>state.t.todos)
    var dispatch = useDispatch();
  return (
    <div className='border border-5 border-secondary m-2 p-2'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{dispatch(newTodo(e.target.value))}}/>
        <button onClick={()=>{dispatch(addTodo())}}>Add Todo</button>
        <ul>
            {
                todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}
export default Todolist