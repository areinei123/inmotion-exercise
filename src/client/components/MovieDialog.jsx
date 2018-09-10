import React from 'react'
import PropTypes from 'prop-types'
import {capitalize, assign} from 'lodash'
import EditActorList from './EditActorList.jsx'
import Modal from '../style/modal.js'

class MovieDialog extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props.params.title,
      genre: this.props.params.genre,
      year: this.props.params.year,
      rating: this.props.params.rating,
      actors: this.props.params.actors,
      id: this.props.params.id || 'new'
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onGenreChange = this.onGenreChange.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
    this.onRatingChange = this.onRatingChange.bind(this)
    this.onActorsChange = this.onActorsChange.bind(this)
    this.onCloseDialog = this.onCloseDialog.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onTitleChange(event){
    this.setState({title: event.target.value})
  }

  onGenreChange(event){
    this.setState({genre: event.target.value})
  }

  onYearChange(event){
    this.setState({year: event.target.value})
  }

  onRatingChange(event){
    this.setState({rating: event.target.value})
  }

  onActorsChange(actors){
    this.setState({actors: actors})
  }

  onCloseDialog(){
    this.props.onClose()
  }

  onSave(){
    let newParams = {
      title: this.state.title,
      genre: this.state.genre,
      year: this.state.year,
      rating: this.state.rating,
      actors: this.state.actors
    }

    if(this.state.id === 'new'){
      this.props.onCreate(newParams)
    }
    else{
      newParams.id = this.state.id
      this.props.onUpdate(newParams)
    }
  }

  render(){

  let genreOptions = [
    'None',
    'Science Fiction',
    'Horror',
    'Thriller',
    'Noir',
    'Action',
    'Comedy',
    'Drama',
    'Tear Jerker'
  ]

  return (
    <div style={Modal.modalOverlay}>
      <div style={Modal.modalContainer}>
        <div style={Modal.modalHeader}>
          <h4>Movie Editor</h4>
          <span style={{fontSize: 30, marginBottom: '11px'}} onClick={this.onCloseDialog}>&times;</span>
        </div>
        <div style={Modal.modalBody}>
          <div>Title:</div>
          <input className="form-control" type="text"
            value={this.state.title}
            onChange={this.onTitleChange}/>
          <div>Genre:</div>
          <select className='form-control'
            value={this.state.genre}
            onChange={this.onGenreChange}>
            {genreOptions.map((option, key) => 
              <option key={'genre-'+key}>{option}</option>
            )}
          </select>
          <div>Year:</div>
          <input className="form-control" type="number"
            value={this.state.year}
            onChange={this.onYearChange}/>
          <div>Rating:</div>
          <input className="form-control" type="number"
            value={this.state.rating}
            onChange={this.onRatingChange}/>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Actors:</label>
            <EditActorList actors={this.state.actors} onChange={this.onActorsChange}/>
          </div>
        </div>
        <div style={Modal.modalFooter}>
          <button style={{marginRight: '3px'}} type='button' className="btn btn-success" onClick={this.onSave}>Save</button>
          <button type='button' className="btn btn-secondary" onClick={this.onCloseDialog}>Cancel</button>
        </div>
      </div>
    </div>
  )}
} 


export default MovieDialog