import React from 'react'
import PropTypes from 'prop-types'
import EditButton from '../containers/EditButton.jsx'
import DeleteButton from '../containers/DeleteButton.jsx'
import CreateButton from '../containers/CreateButton.jsx'
import OpenButton from '../containers/OpenButton.jsx'

const Movies = ({movies}) => {
  return (
    <div className='fluid-container'>
      <h1 className='display-4 text-center'>Movies</h1>
      <CreateButton/>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Genre</th>
            <th scope='col'>Year</th>
            <th scope='col'>Rating</th>
            <th scope='col'>Details</th>
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
              <td scope='row'><OpenButton movie={movie}/></td>
              <td scope='row'><EditButton movie={movie}/></td>
              <td scope='row'><DeleteButton id={movie.id}/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Movies