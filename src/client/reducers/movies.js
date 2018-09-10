const movies = (
  state = {
    loadingMovies: false,
    movies: [],
    errorLoadingMovies: false,
    movieErrorMessage: '',
    loadingDelete: false,
    loadingDeleteId: false,
    loadingEdit: false,
    loadingEditId: false,
    loadingCreate: false,
    movieDialog: false,
    movieDialogParams: {},
    actionError: false,
    actionErrorMessage: ''
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
    case 'REQUEST_DELETE':
      return Object.assign({}, state, {
        loadingDelete: true,
        loadingDeleteId: action.id
      })
    case 'COMPLETE_DELETE':
      return Object.assign({}, state, {
        loadingDelete: false,
        loadingDeleteId: false
      })
    case 'REQUEST_DELETE_FAILURE':
      return Object.assign({}, state, {
        loadingDelete: false,
        loadingDeleteId: false,
        actionError: true,
        actionErrorMessage: action.message
      })
    case 'REQUEST_EDIT':
      return Object.assign({}, state, {
        loadingEdit: true,
        loadingEditId: action.id,
      })
    case 'COMPLETE_EDIT':
      return Object.assign({}, state, {
        loadingEdit: false,
        loadingEditId: false,
        movieDialog: false
      })
    case 'REQUEST_EDIT_FAILURE':
      return Object.assign({}, state, {
        loadingEdit: false,
        loadingEditId: false,
        actionError: true,
        actionErrorMessage: action.message
      })
    case 'REQUEST_CREATE':
      return Object.assign({}, state, {
        loadingCreate: true
      })
    case 'COMPLETE_CREATE':
      return Object.assign({}, state, {
        loadingCreate: false,
        movieDialog: false
      })
    case 'REQUEST_CREATE_FAILURE':
      return Object.assign({}, state, {
        loadingCreate: false,
        actionError: true,
        actionErrorMessage: action.message
      })
    case 'OPEN_MOVIE_DIALOG':
      return Object.assign({}, state, {
        movieDialog: true,
        movieDialogParams: action.params
      })
    case 'EDIT_MOVIE_PARAMS':
      return Object.assign({}, state, {
        movieDialogParams: action.params
      })
    case 'CLOSE_MOVIE_EDITOR':
      return Object.assign({}, state, {
        movieDialogParams: action.params,
        movieDialog: false
      })
    default: 
      return state
  }
}

export default movies