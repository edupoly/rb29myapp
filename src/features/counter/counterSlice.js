import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    count:0
}
var counterSlice = createSlice({
    name:'cntr',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count++;
        },
        decrement:(state,action)=>{
            state.count--
        },
        reset:(state,action)=>{
            state.count=initialState.count;
        }
    }
})

    export var {increment,decrement,reset}=counterSlice.actions;
    var  counterReducer = counterSlice.reducer;
    export default counterReducer;