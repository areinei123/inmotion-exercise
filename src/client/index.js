import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App.jsx'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}><App/></Provider>
  , document.getElementById('app')
)
