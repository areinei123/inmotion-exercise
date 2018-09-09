import React from 'react'
import PropTypes from 'prop-types'
import {capitalize, assign} from 'lodash'
import EditActorList from './EditActorList.jsx'

const MovieDialog = ({params, onCreate, onUpdate, onChange, onClose}) => {

  let modalOverlay = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'hsla(0, 0%, 70%, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }

  let modalContainer = {
    borderRadius: '4px',
    backgroundColor: 'white',
    border: '1px solid gray',
    padding: '15px',
    width: '340px'
  }

  let modalHeader = {
    borderBottom: '1px solid lightgray',
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  let modalBody = {
    padding: '3px'
  }

  let modalFooter = {
    borderTop: '1px solid lightgray',
    padding: '3px'
  }

  let genreOptions = [
    'none',
    'science fiction',
    'horror',
    'thriller',
    'noir',
    'action',
    'comedy',
    'drama',
    'tear jerker'
  ]

  const onTitleChange = (event) => {
    let newParams = params
    newParams.title = event.target.value
    onChange(params)
  }

  const onGenreChange = (event) => {
    let newParams = params
    newParams.genre = event.target.value
    onChange(params)
  }

  const onYearChange = (event) => {
    let newParams = params
    newParams.year = event.target.value
    onChange(params)
  }

  const onRatingChange = (event) => {
    let newParams = params
    newParams.rating = event.target.value
    onChange(params)
  }

  const onActorsChange = (actors) => {
    let newParams = assign(params, {actors: actors})
    onChange(newParams)
  }

  const onCloseDialog = () => {
    onClose()
  }

  return (
    <div style={modalOverlay}>
      <div style={modalContainer}>
        <div style={modalHeader}>
          <h4>Movie Editor</h4>
          <span style={{fontSize: 30, marginBottom: '11px'}} onClick={onCloseDialog}>&times;</span>
        </div>
        <div style={modalBody}>
          <div>Title:</div>
          <input className="form-control" type="text" />
            {/*value={title}
            onChange={() => onParamsChange('title', event)}/>*/}
          <div>Genre:</div>
          <select className='form-control'> 
            {/*value={genre}
            onChange={() => onParamsChange('genre', event)}>*/}
            {genreOptions.map((option, key) => 
              <option key={'genre-'+key}>{capitalize(option)}</option>
            )}
          </select>
          <div>Year:</div>
          <input className="form-control" type="number" />
            {/*value={year}
            onChange={() => onParamsChange('year', event)*/}
          <div>Rating:</div>
          <input className="form-control" type="number"/> 
            {/*value={rating}
            onChange={() => onParamsChange('rating', event)}/>*/}

          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Actors:</label>
            <EditActorList actors={params.actors} onChange={onActorsChange}/>
          </div>
        </div>
        <div style={modalFooter}>
          <button onClick={onCloseDialog}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default MovieDialog