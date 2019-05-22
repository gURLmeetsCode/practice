import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import combinedReducers from './reducers/index';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware))
  )
