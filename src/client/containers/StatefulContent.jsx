import {connect} from 'react-redux'
import Content from '../components/Content.jsx'
import {navigateToPage} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  page: state.navigation.page,
  movies: state.movies.movies,
  movieDialog: state.movies.movieDialog,
  movieDialogParams: state.movies.movieDialogParams
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)