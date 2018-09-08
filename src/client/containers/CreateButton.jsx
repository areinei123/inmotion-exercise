import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {navigateToPage} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'edit',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(createMovie(ownProps.type, ownProps.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)