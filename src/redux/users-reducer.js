import {userAPI} from '../api/api.js'
import {getUserProfileRepos} from "./repos-reducer";
import {setEmptyUser} from "./app-reducer";

const SET_USER = 'SET_USER'
const SET_TOTAL_REPOS_COUNT = 'SET_TOTAL_REPOS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState ={
    user: {
        login: '',
        followers: '',
        following: ''
    },
    totalReposCount: 0,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case SET_TOTAL_REPOS_COUNT: {
            return {
                ...state,
                totalReposCount: action.totalReposCount
            }
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const SetUser = (user) => {
    return {type: SET_USER, user}
}

export const setTotalReposCount = (totalReposCount) => {
    return {type: SET_TOTAL_REPOS_COUNT, totalReposCount}
}

export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}

export const getUserProfileInfo = (user) => async (dispatch) => {
    debugger
    try{
        dispatch(setIsFetching(true))
        const data = await userAPI.getUserInfo(user);
        dispatch(setIsFetching(false))
        dispatch(SetUser(data));
        dispatch(setTotalReposCount(data.public_repos))
        dispatch(setEmptyUser(false))
    }catch(e){
        dispatch(setEmptyUser(true))
    }
}



export default usersReducer;