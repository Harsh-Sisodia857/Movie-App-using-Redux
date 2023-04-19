import React from 'react';
import Navbar from './component/Navbar';
import { data } from './data'
import MovieCard from './component/MovieCard';
import { addMovies, showFavourite } from './actions';

class App extends React.Component{
  componentDidMount() { 
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    })
    //make api call
    
    // dispatch action
    store.dispatch(addMovies(data))
    console.log("State : ",this.props.store.getState())
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return false;
    }
    else {
      return true;
    }
  }

  changeTab = (val) => {
    const { store } = this.props;
     store.dispatch(showFavourite(val))
  }
  
  render() {
    const { list: movies, favourites, showFavourite } = this.props.store.getState();
    const displayMovie = showFavourite ? favourites : movies;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite ? "" : 'active-tabs'}`} onClick={() => this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite ? 'active-tabs' : ""}`} onClick={() => this.changeTab(true)}>Favourites</div>
          </div>
          <div className="list my-5">
            {
              displayMovie.map((movie, index) => {
                return < MovieCard movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch} getState={this.props.store.getState} isFavourite={ this.isMovieFavourite(movie)} />
              })
            }
            {
              displayMovie.length === 0 ? <div className='no-movies'> No Movie To Show! </div> : null
            }
          </div>
        </div>
      </div>
  );
  }
}

export default App;
