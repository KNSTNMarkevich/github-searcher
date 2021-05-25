import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reposReducer from "./repos-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    users: usersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;