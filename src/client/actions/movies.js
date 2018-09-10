export function receiveMovies(data) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: data,
    receivedAt: Date.now()
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
    .then( json => dispatch(receiveMovies(json.data)))
  }
}

export function createMovie(params){
  return function(dispatch){
    dispatch(requestCreate())

    let body = JSON.stringify(params)

    let request = fetch('/api/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body
    })
    
    return request
    .then(
      response => dispatch(fetchMovies()),
      error => dispatch(requestCreateError(error))
    )
    .then(() => dispatch(completeCreate()))
  }
}

export function deleteMovie(id){
  return function(dispatch){
    dispatch(requestDelete(id))

    // let body = JSON.stringify(params)

    let request = fetch('/api/movies/'+id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
      // body: body
    })
    
    return request
    .then(
      response => dispatch(fetchMovies()),
      error => dispatch(requestDeleteError(error))
    )
    .then(() => dispatch(completeDelete(id)))
  }
}

export function editMovie(params){
  return function(dispatch){
    dispatch(requestEdit(params.id))

    let body = JSON.stringify(params)

    let request = fetch('/api/movies/'+params.id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: body
    })
    
    return request
    .then(
      response => dispatch(fetchMovies()),
      error => dispatch(requestEditError(error))
    )
    .then( () => dispatch(completeEdit(params.id)))
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

export function requestDelete(id, type){
  return {
    type: 'REQUEST_DELETE',
    id: id
  }
}

export function completeDelete(id, type){
  return {
    type: 'COMPLETE_DELETE',
    id: id
  }
}

export function requestDeleteError(error){
  return {
    type: 'REQUEST_DELETE_FAILURE',
    message: error
  }
}

export function requestCreate(type){
  return {
    type: 'REQUEST_CREATE',
  }
}

export function completeCreate(id, type){
  return {
    type: 'COMPLETE_CREATE'
  }
}

export function requestCreateError(error){
  return {
    type: 'REQUEST_CREATE_FAILURE',
    message: error
  }
}

export function requestEdit(id, type){
  return {
    type: 'REQUEST_EDIT',
    id: id
  }
}

export function completeEdit(id, type){
  return {
    type: 'COMPLETE_EDIT',
    id: id
  }
}

export function requestEditError(error){
  return {
    type: 'REQUEST_EDIT_FAILURE',
    message: error
  }
}

export function newMovieDialog(){
  return {
    type: 'OPEN_MOVIE_DIALOG',
    params: {
      title: '',
      genre: 'none',
      year: 2018,
      rating: 0,
      actors: []
    }
  }
}

export function editMovieDialog(params){
  return {
    type: 'OPEN_MOVIE_DIALOG',
    params: params
  }
}

export function changeMovieParams(params){
  return {
    type: 'EDIT_MOVIE_PARAMS',
    params: params
  }
}

export function closeMovieEditor(){
  return {
    type: 'CLOSE_MOVIE_EDITOR',
    params: {}
  }
}
