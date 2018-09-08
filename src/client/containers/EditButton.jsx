import {connect} from 'react-redux'
import Button from '../components/Button.jsx'
import {editDocument} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  label: 'edit',
  color: 'success'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editMovie(ownProps.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)