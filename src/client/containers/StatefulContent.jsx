import {connect} from 'react-redux'
import Content from '../components/Content.jsx'
import {navigateToPage} from '../actions/navigation.js'
import {onSearchValueChange} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  page: state.navigation.page,
  movies: state.movies.filterMovies.length > 0 
    ? state.movies.filterMovies
    : state.movies.movies,
  movieDialog: state.movies.movieDialog,
  movieDetails: state.movies.movieDetails,
  movieSpotlight: state.movies.movieSpotlight,
  searchValue: state.movies.searchValue,
  filterMovies: state.movies.filterMovies
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(onSearchValueChange(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)