import React from 'react';
import Navbar from './component/Navbar';
import { data } from './data'
import MovieCard from './component/MovieCard';
import { addMovies, showFavourite } from './actions';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // WHEN WE DISPATCH AN ACTION SUBSCRIBE WILL BE CALLED
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    })
    //make api call

    // dispatch action. CALLING ACTION CREATOR (CREATES AN ACTION)
    store.dispatch(addMovies(data))
    console.log("State : ", this.props.store.getState())
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
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
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourite } = movies;
    const displayMovie = showFavourite ? favourites : list;
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
                return < MovieCard movie={movie}
                  key={`movie-${index}`}
                  dispatch={this.props.store.dispatch}
                  getState={this.props.store.getState}
                  isFavourite={this.isMovieFavourite(movie)} />
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
