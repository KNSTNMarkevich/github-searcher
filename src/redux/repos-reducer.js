import {reposAPI} from "../api/api";

const SET_REPOS = 'SET_REPOS'


let initialState = {
    repos: ''
};


const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                repos: action.username
            }
        }
        default:
            return state;
    }
}

export const SetRepos = (username) => {
    return {type: SET_REPOS, username}
}

export const getUserProfileRepos = (username) => async (dispatch) => {
    const data = await reposAPI.getRepos(username)
    dispatch(SetRepos(data));
}

export default reposReducer;