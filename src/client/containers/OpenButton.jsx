import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {openMovieDetails} from '../actions/movies.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'open',
  color: 'primary'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(openMovieDetails(ownProps.movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)