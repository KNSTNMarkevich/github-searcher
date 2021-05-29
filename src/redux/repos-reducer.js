import {reposAPI, userAPI} from "../api/api";
import {setEmptyRepos} from "./app-reducer";

const SET_REPOS = 'SET_REPOS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
    repos: [],
    selected: {
        selected: 1
    },
    perPage: 4,
    isFetching: false,
    firstListItem: 1,
    lastListItem: 4,
};


//

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                repos: [...action.username]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                ...state.selected,
                selected: action.currentPage,
                firstListItem: action.currentPage*4-3,
                lastListItem: action.currentPage*4
            }
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const SetRepos = (username) => {
    return {type: SET_REPOS, username}
}

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}

export const getUserProfileRepos = (username, currentPage, perPage) => async (dispatch) => {
    try {
        dispatch(setIsFetching(true))
        const data = await userAPI.getRepos(username, currentPage, perPage)
        dispatch(setIsFetching(false))
        dispatch(SetRepos(data));
        dispatch(setEmptyRepos(false))
    } catch (e) {
        dispatch(setEmptyRepos(true))
        alert('repos not found')
    }

}

export default reposReducer;