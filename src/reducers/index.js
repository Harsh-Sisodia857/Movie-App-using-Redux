import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE } from "../actions"
import { combineReducers } from "redux";


const initalMoviesState = {
    list: [],
    favourites: [],
    showFavourite: false
};
// GETTING INITIAL STATE AND ACTION TRIGGERED
export function movies(state = initalMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            // RETURNS NEW STATE
            return {
                ...state,
                list: action.movies
            };
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            };
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)
            return {
                ...state,
                favourites: filteredArray
            };
        case SHOW_FAVOURITE:
            return {
                ...state,
                showFavourite: action.val
            }
        default:
            return state;
    }

}

const initialSearchState = {
    result: {}
};

export function search(state = initialSearchState, action) {
    return state;
}

// const initialRootState = {
//     movies: initalMoviesState,
//     search: initialSearchState
// };

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

// it works same as rootReducer internally
export default combineReducers({
    movies,
    search
})