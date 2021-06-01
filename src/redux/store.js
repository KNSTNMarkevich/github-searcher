import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import usersReducer from "./users-reducer";
import searchReducer from "./search-reducer";
import reposReducer from "./repos-reducer";
import appReducer from "./app-reducer"

let reducers = combineReducers({
    users: usersReducer,
    search: searchReducer,
    repos: reposReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;