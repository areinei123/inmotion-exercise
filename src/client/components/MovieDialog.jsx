import React from 'react'
import PropTypes from 'prop-types'
import {capitalize, assign} from 'lodash'
import EditActorList from './EditActorList.jsx'

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

  return (
    <div style={modalOverlay}>
      <div style={modalContainer}>
        <div style={modalHeader}>
          <h4>Movie Editor</h4>
          <span style={{fontSize: 30, marginBottom: '11px'}} onClick={this.onCloseDialog}>&times;</span>
        </div>
        <div style={modalBody}>
          <div>Title:</div>
          <input className="form-control" type="text"
            value={this.state.title}
            onChange={this.onTitleChange}/>
          <div>Genre:</div>
          <select className='form-control'
            value={this.state.genre}
            onChange={this.onGenreChange}>
            {genreOptions.map((option, key) => 
              <option key={'genre-'+key}>{capitalize(option)}</option>
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
        <div style={modalFooter}>
          <button style={{marginRight: '3px'}} type='button' className="btn btn-success" onClick={this.onSave}>Save</button>
          <button type='button' className="btn btn-secondary" onClick={this.onCloseDialog}>Cancel</button>
        </div>
      </div>
    </div>
  )}
} 


export default MovieDialog