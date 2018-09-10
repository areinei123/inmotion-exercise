import React from 'react'
import PropTypes from 'prop-types'

const Actors = ({movies}) => {
  return (
    <div className='fluid-container'>
      <h1 className='display-4 text-center'>Actors</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Movie</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, key) => 
            movie.actors.map(actor => 
              <tr key={'movie-row-'+key}>
                <td scope='row'>{actor.name}</td>
                <td scope='row'>{movie.title}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Actors