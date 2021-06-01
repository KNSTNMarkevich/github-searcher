const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const IS_SEARCHED = 'IS_SEARCHED'

let initialState = {
    searchValue: '',
    isSearchedState: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.searchValue
            }
        }
        case IS_SEARCHED: {
            return {
                ...state,
                isSearchedState: action.value
            }
        }
        default:
            return state;
    }
}

export const SetSearchValue = (searchValue) => {
    return {type: SET_SEARCH_VALUE, searchValue}
}
export const isSearched = (value) => {
    return {type: IS_SEARCHED, value}
}


export default searchReducer;