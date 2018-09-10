import React from 'react'
import Movies from './Movies.jsx'
import Actors from './Actors.jsx'
import Roles from './Roles.jsx'
import StatefulMovieDialog from '../containers/StatefulMovieDialog.jsx'
import StatefulMovieDetails from '../containers/StatefulMovieDetails.jsx'
import SearchInput from './SearchInput.jsx'


const Content = ({page, movies, movieDialog, movieDetails, movieSpotlight, searchValue, filterMovies, onChange}) => {
  switch(page){
    case 'movies':
      return (
        <div>
          <SearchInput value={searchValue} onChange={onChange}/>
          <Movies movies={filterMovies.length > 0 ? filterMovies : movies}/>
          {movieDialog &&
            <StatefulMovieDialog/>
          }
          {movieDetails && 
            <StatefulMovieDetails movie={movieSpotlight}/>
          }
        </div>
      )
    case 'actors':
      return (
        <div>
          <Actors/>
        </div>
      )
    case 'roles':
      return (
        <div>
          <Roles/>
        </div>
      )
    default:
      return (
        <div>
        </div>
      )
  }
}

export default Content
