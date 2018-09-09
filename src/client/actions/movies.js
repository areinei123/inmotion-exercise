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
    .then( json => {
      dispatch(receiveMovies(json.data))
    })
  }
}

export function createMovie(params){
  return function(dispatch){
    dispatch(requestCreate())

    let request = fetch('/api/movies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: {
        "title": params.title,
        "genre": params.genre,
        "year":  params.year,
        "rating": params.rating,
        "actors": params.actors
      }
    })
    
    return request
    .then(
      response => dispatch(fetchMovies),
      error => dispatch(requestCreateError(error))
    )
    .then(() => {
      dispatch(completeCreate)
    })
  }
}

export function deleteMovie(params){
  return function(dispatch){
    dispatch(requestDelete())

    let request = fetch('/api/movies', {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: {
        "id": params.id
      }
    })
    
    return request
    .then(
      response => dispatch(requestMovies),
      error => dispatch(requestDeleteError(error))
    )
    .then(() => {
      dispatch(completeDelete)
    })
  }
}

export function editMovie(){
  return function(dispatch){
    dispatch(requestEdit())

    let request = fetch('/api/movies', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: {
        "title": params.title,
        "genre": params.genre,
        "year":  params.year,
        "rating": params.rating,
        "actors": params.actors,
        "id": params.id
      }
    })
    
    return request
    .then(
      response => dispatch(fetchMovies),
      error => dispatch(requestEditError(error))
    )
    .then( () => {
      dispatch(requestEdit)
    })
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

export function requestCreate(id, type){
  return {
    type: 'REQUEST_CREATE',
    id: id
  }
}

export function completeCreate(id, type){
  return {
    type: 'COMPLETE_CREATE',
    id: id
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
