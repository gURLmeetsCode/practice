/* combineReducers is not currently used, but eventually should be for modular code :D */
import {combineReducers} from 'redux'



import aircraftsReducer from './aircraftsReducer'
import countriesReducer from './countriesReducer'



const combinedReducers = combineReducers({
  aircrafts: aircraftsReducer,
  countries: countriesReducer
})

export default combinedReducers;
