import {userAPI} from '../api/api.js'
import {getUserProfileRepos} from "./repos-reducer";

const SET_USER = 'SET_USER'


let initialState ={
    user: {
        login: '',
        followers: '',
        following: ''
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}

export const SetUser = (user) => {
    return {type: SET_USER, user}
}

export const getUserProfileInfo = (user) => async (dispatch) => {
    const data = await userAPI.getUserInfo(user);
    dispatch(getUserProfileRepos(user))
    dispatch(SetUser(data));
}



export default usersReducer;