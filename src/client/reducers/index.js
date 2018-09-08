import {combineReducers} from 'redux'
import movies from './movies.js'
import navigation from './navigation.js'

export default combineReducers({
  movies,
  navigation
})