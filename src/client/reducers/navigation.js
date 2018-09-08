const movies = (
  state = {
    page: 'home'
  },
  action
) => {
  switch(action.type){
    case 'NAVIGATE_TO_PAGE':
      return Object.assign({}, state, {
        page: action.page,
        lastPage: state.page
      })
    case 'NAVIGATE_BACK':
      return Object.assign({}, state, {
        page: state.lastPage
      })
    default: 
      return state
  }
}

export default movies