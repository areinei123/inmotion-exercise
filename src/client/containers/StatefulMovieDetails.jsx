import {connect} from 'react-redux'
import MovieDetails from '../components/MovieDetails.jsx'
import {closeMovieDetails} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => dispatch(closeMovieDetails())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails)