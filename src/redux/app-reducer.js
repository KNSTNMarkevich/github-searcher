const IS_EMPTY_USER = 'IS_EMPTY_USER'
const IS_EMPTY_REPOS = 'IS_EMPTY_REPOS'


let initialState = {
    isEmptyUser: false,
    isEmptyRepos: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_EMPTY_USER: {
            return {...state, isEmptyUser: action.isEmpty}
        }
        case IS_EMPTY_REPOS: {
            return {...state, isEmptyRepos: action.isEmpty}
        }
        default:
            return state;
    }

}

export const setEmptyUser = (isEmpty) => {
    return {type: IS_EMPTY_USER, isEmpty}
}

export const setEmptyRepos = (isEmpty) => {
    return {type: IS_EMPTY_REPOS, isEmpty}
}

export default appReducer;