const initialState={
    todos:[
        "get bmw",
        'pay bills',
        'purchase villa'
    ]
}
const todoReducer=function(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReducer