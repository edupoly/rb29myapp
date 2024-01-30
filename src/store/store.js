import {createStore,combineReducers} from 'redux'
import CounterReducer from "./reducers/counter.reducer";
import todoReducer from './reducers/todo.reducer';
var finalReducer = combineReducers({c:CounterReducer,t:todoReducer})
var store = new createStore(finalReducer);

export default store;