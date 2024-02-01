import {createSlice} from '@reduxjs/toolkit';

const initialState={
    todos:[
        "get bmw",
        "pay school fee",
        "pay rent"
    ],
    newtodo:''
}

var todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        newTodo:(state,action)=>{
            state.newtodo=action.payload
        },
        addTodo:(state,action)=>{
            state.todos.push(state.newtodo)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
var todoReducer = todoSlice.reducer;
export var {addTodo,deleteTodo,newTodo} = todoSlice.actions;
export default todoReducer;