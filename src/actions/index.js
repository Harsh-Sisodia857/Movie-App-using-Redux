// action is telling a store to modify the state i.e what action to be performed
// They are just js object
// UI -> ACTION -> REDUCER -> STORE 
//BELOW VARIABLE CALLED action types
export const ADD_MOVIES = "ADD_MOVIES"
export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"
export const SHOW_FAVOURITE = "SHOW_FAVOURITE"



// action creator
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    };
}

export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie
    };
}

export function showFavourite(val) {
    return {
        type: SHOW_FAVOURITE,
        val
    };
}