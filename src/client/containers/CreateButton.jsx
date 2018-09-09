import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {newMovieDialog} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'New',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(newMovieDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)