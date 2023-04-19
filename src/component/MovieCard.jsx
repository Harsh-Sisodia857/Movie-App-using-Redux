import React, { Component } from 'react'
import { addFavourite, removeFavourite } from "../actions/index";

export default class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
    console.log("NEW STATE : ", this.props.getState());
  };
  handleUnfavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
    console.log("NEW STATE : ", this.props.getState());
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating"> {movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            ) : (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavouriteClick}
              >
                Unfavourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
