import React from 'react'
import Movies from '../components/Movies.jsx'
import Actors from '../components/Actors.jsx'
import Roles from '../components/Roles.jsx'
import StatefulMovieDialog from '../containers/StatefulMovieDialog.jsx'


const Content = ({page, movies, movieDialog, params}) => {
  switch(page){
    case 'movies':
      return (
        <div>
          <Movies movies={movies}/>
          {movieDialog &&
            <StatefulMovieDialog/>
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
