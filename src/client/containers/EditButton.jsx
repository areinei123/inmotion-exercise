import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {editMovieDialog} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'edit',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editMovieDialog(ownProps.movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)