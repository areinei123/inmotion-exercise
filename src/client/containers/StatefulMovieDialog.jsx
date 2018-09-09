import {connect} from 'react-redux'
import MovieDialog from '../components/MovieDialog.jsx'
import {editMovie, createMovie} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  movie: movieDialogParams
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: () => dispatch(createMovie(ownProps.params)),
  onUpdate: () => dispatch(editMovie(ownProps.params)),
  onChange: () => dispatch(changeMovieParams(ownProps.params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDialog)