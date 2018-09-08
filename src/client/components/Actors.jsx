import React from 'react'
import PropTypes from 'prop-types'
import EditButton from '../containers/EditButton.jsx'
import DeleteButton from '../containers/DeleteButton.jsx'

const Movies = ({movies}) => {
  return (
    <div className='fluid-container'>
      <h1 className='display-4 text-center'>Movies</h1>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Genre</th>
            <th scope='col'>Year</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, key) => 
            <tr key={'movie-row-'+key}>
              <td scope='row'>{movie.title}</td>
              <td scope='row'>{movie.genre}</td>
              <td scope='row'>{movie.year}</td>
              <td scope='row'>{movie.rating}</td>
              <td scope='row'><EditButton/></td>
              <td scope='row'><DeleteButton/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Movies