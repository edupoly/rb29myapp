//state
const initialState={
    count:0
}
//actions
var CounterReducer=(state=initialState,action)=>{
    if(action.type==='INC'){
        return {...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return {...state,count:state.count-1}
    }
    if(action.type==='RESET'){
        return {...state,count:0}
    }
    return state
}

export default CounterReducer;