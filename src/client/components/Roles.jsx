import React from 'react'
import PropTypes from 'prop-types'

const Roles = ({movies}) => {
  return (
    <div className='fluid-container'>
      <h1 className='display-4 text-center'>Roles</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Movie</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => 
            movie.actors.map((actor, key) => 
              <tr key={'movie-row-'+key}>
                <td scope='row'>{actor.role}</td>
                <td scope='row'>{movie.title}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Roles