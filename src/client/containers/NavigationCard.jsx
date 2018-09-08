import {connect} from 'react-redux'
import Card from '../components/Card.jsx'
import {navigateToPage} from '../actions/navigation.js'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.title === state.navigation.page,
  page: state.navigation.page
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(navigateToPage(ownProps.title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)