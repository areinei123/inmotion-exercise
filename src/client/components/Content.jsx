import React from 'react'
import StatefulMovieDialog from '../containers/StatefulMovieDialog.jsx'
import Movies from '../components/Movies.jsx'
import Actors from '../components/Actors.jsx'
import Roles from '../components/Roles.jsx'

const Content = ({page, movies, movieDialog, movieDialogParams}) => {
  if(movieDialog)
    return (
      <StatefulMovieDialog movie={movieDialogParams}/>
    )

  switch(page){
    case 'movies':
      return (
        <div>
          <Movies movies={movies}/>
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
