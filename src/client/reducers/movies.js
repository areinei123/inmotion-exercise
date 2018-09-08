const movies = (
  state = {
    loadingMovies: false,
    movies: [],
    errorLoadingMovies: false,
    movieErrorMessage: ''
  },
  action
) => {
  switch(action.type){
    case 'REQUEST_MOVIES':
      return Object.assign({}, state, {
        loadingMovies: true
      })
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, {
        movies: action.movies,
        loadingMovies: false
      })
    case 'REQUEST_MOVIES_FAILURE':
      return Object.assign({}, state, {
        loadingMovies: false,
        errorLoadingMovies: true,
        movieErrorMessage: action.message
      })
    default: 
      return state
  }
}

export default movies