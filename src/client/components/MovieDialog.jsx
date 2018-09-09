import React from 'react'
import PropTypes from 'prop-types'
import {capitalize} from 'lodash'

const MovieDialog = ({movie, onCreate, onUpdate, onChange}) => {

  let genreOptions = [
    'science fiction',
    'horror',
    'thriller',
    'noir',
    'action',
    'comedy',
    'drama',
    'tear jerker'
  ]

  return (
    <div className='container-fluid'>
      <h1 className='display-4'>Movie Editor</h1>
      <hr/>
      <input className="form-control form-control-lg" type="text" placeholder="Title goes here"/>
      <select className='form-control form-control-lg' placeholder='Genre'>
        {genreOptions.map(option => 
          <option>{capitalize(option.name)}</option>
        )}
      </select>
      <input className="form-control form-control-lg" type="number" placeholder="Year"/>
      <input className="form-control form-control-lg" type="number" placeholder="Rating"/>

      <div className="form-group">
        <label for="exampleFormControlInput1">Actors</label>
        {movie.actors.length > 0 &&
          movie.actors.map((actor, key) => {
            <div>
              <input type="text" className="form-control" placeholder="Actor"/>: 
              <input type="text" className="form-control" placeholder="Role"/>
            </div>
          })
        }
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Actor"/>: <input type="text" className="form-control" placeholder="Role"/>
      </div>
    </div>
  )
}

export default MovieDialog