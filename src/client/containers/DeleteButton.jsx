import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {navigateToPage} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'delete',
  color: 'danger'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => confirm('Are you sure?') ? dispatch(deleteMovie(ownProps.id)) : undefined
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)