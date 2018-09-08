export function receiveMovies(data) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: data,
    receivedAt: Date.now()
  }
}

export function requestMovies(){
  return {
    type: 'REQUEST_MOVIES'
  }
}

export function requestMoviesError(error){
  return {
    type: 'REQUEST_MOVIES_FAILURE',
    message: error
  }
}

export function fetchMovies(){
  return function(dispatch){
    dispatch(requestMovies())

    let request = fetch('/api/movies')
    
    return request
    .then(
      response => response.json(),
      error => dispatch(requestMoviesError(error))
    )
    .then( json => {
      dispatch(receiveMovies(json.data))
    })
  }
}