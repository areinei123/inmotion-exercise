import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../style/modal.js'

const MovieDetails = ({movie, onClose}) => {
  return(
    <div style={Modal.modalOverlay}>
      <div style={Modal.modalContainer}>
        <div style={Modal.modalHeader}>
          <h4>Movie Details</h4>
          <span style={{fontSize: 30, marginBottom: '11px'}} onClick={onClose}>&times;</span>
        </div>
        <div style={Modal.modalBody}>
          <div>Title: {movie.title}</div>
          <div>Genre: {movie.genre}</div>
          <div>Year: {movie.year}</div>
          <div>Rating: {movie.rating}</div>
          <div className="">
            <div>Actors:</div>
            <div>
              {movie.actors.map((actor, key) => 
                <div key={"actor-"+key}>{actor.name} played {actor.role}</div>
              )}
            </div>
          </div>
        </div>
        <div style={Modal.modalFooter}>
          <button type='button' className="btn btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
