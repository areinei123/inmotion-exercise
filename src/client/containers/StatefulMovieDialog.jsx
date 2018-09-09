import {connect} from 'react-redux'
import MovieDialog from '../components/MovieDialog.jsx'
import {editMovie, createMovie, changeMovieParams, closeMovieEditor} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  params: state.movies.movieDialogParams
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: (params) => dispatch(createMovie(params)),
  onUpdate: (params) => dispatch(editMovie(params)),
  onChange: (params) => dispatch(changeMovieParams(params)),
  onClose: () => dispatch(closeMovieEditor())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDialog)