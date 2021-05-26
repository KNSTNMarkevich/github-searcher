const SET_REPOS = 'SET_REPOS'


let initialState = {
    repos: [],
};


const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                repos: [...action.repos]
            }
        }
        default:
            return state;
    }
}

export const SetUser = (username) => {
    return {type: SET_REPOS, username}
}

export default reposReducer;