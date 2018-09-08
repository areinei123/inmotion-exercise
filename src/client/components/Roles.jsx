import React from 'react'
import PropTypes from 'prop-types'
import EditButton from '../containers/EditButton.jsx'
import DeleteButton from '../containers/DeleteButton.jsx'

const Roles = ({roles}) => {
  return (
    <div className='fluid-container'>
      <h1 className='display-4 text-center'>Roles</h1>
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
          {roles.map((role, key) => 
            <tr key={'role-row-'+key}>
              <td scope='row'>{role.title}</td>
              <td scope='row'>{role.genre}</td>
              <td scope='row'>{role.year}</td>
              <td scope='row'>{role.rating}</td>
              <td scope='row'><EditButton/></td>
              <td scope='row'><DeleteButton/></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Roles