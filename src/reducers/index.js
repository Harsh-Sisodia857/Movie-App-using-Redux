import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE } from "../actions"

const initalMoviesState = {
    list: [],
    favourites: [],
    showFavourite : false
}
export default function movies(state = initalMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
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
                showFavourite : action.val

            }
        default:
            return state;    
    }
   
}

