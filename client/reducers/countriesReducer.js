import axios from 'axios'


// ACTION TYPES
const GET_COUNTRIES = 'GET_COUNTRIES'
const GET_FIVE_COUNTRIES = 'GET_FIVE_COUNTRIES'
const GET_A_COUNTRY = 'GET_A_COUNTRY'
const ADD_A_COUNTRY = 'ADD_A_COUNTRY'
const UPDATE_A_COUNTRY = 'UPDATE_A_COUNTRY'
const REMOVE_A_COUNTRY = 'REMOVE_A_COUNTRY'


// ACTION CREATORS
export const gotCountriesActionCreator = data => ({
  type: GET_COUNTRIES,
  countries: data
})

export const gotFiveCountriesActionCreator = data => ({
  type: GET_FIVE_COUNTRIES,
  countries: data
})

export const gotACountryActionCreator = data => ({
  type: GET_A_COUNTRY,
  countries: data
})

export const addACountryActionCreator = (strings) => ({
  type: ADD_A_COUNTRY,
  newCountry: strings
})

export const updateACountryActionCreator = (strings) => ({
  type: UPDATE_A_COUNTRY,
  updatedCountry: strings
})

export const deleteACountryActionCreator = (data) => ({
  type: REMOVE_A_COUNTRY,
  id: data.id
})


// THUNK CREATORS
export const getCountriesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/countries')
      dispatch(gotCountriesActionCreator(response.data))
    }
    catch (err) {
      console.error(err, "your get countries thunky thunk is broken shawty")
    }
  }
}

export const getFiveCountriesThunk = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/countries/topFive')
      dispatch(gotFiveCountriesActionCreator(response.data))
    }
    catch (err) {
      console.error(err, "your get countries thunky thunk is broken shawty")
    }
  }
}

export const getACountryThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/countries/${id}`)
      dispatch(gotACountryActionCreator(response.data))
    }
    catch (err) {
      console.error(err, "your get countries thunky thunk is broken shawty")
    }
  }
}

export const addACountryThunk = (obj) => {
  return async (dispatch) => {
    try{
      const response = await axios.post("/api/countries/", obj)
      dispatch(addACountryActionCreator(response.data))
    }
    catch(err){
      console.log(err, "your thunky thunk is broken")
    }
  }
}

export const updateACountryThunk = (countryId, obj) => {
  return async (dispatch) => {
    try{
      const response = await axios.put(`/api/countries/${countryId}`, obj)
      dispatch(updateACountryActionCreator(response.data))
    }
    catch(err){
      console.log(err, "your update thunky thunk is broken")
    }
  }
}


export const removeACountryThunk = (countryId) => {
  return async (dispatch) => {
    try{
      const response = await axios.delete(`/api/countries/${countryId}`)
      dispatch(deleteACountryActionCreator(response.data))
    }
    catch(err){
      console.log(err, "your delete thunky thunk is broken")
    }
  }
}


const initialState = {
  allCountries: [],
  singleCountry: {},
  onlyFive:[]
}


// REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.countries
      }
    case GET_FIVE_COUNTRIES:
      return {
        ...state,
        onlyFive: action.countries
      }
    case GET_A_COUNTRY:
      return {
        ...state,
        singleCountry: action.countries
      }
    case ADD_A_COUNTRY:
        return {
          ...state,
          allCountries:[...state.allCountries, action.newCountry]
        }
    case UPDATE_A_COUNTRY:
        return state
    case REMOVE_A_COUNTRY:
        return state
    default:
      return state
  }
}



export default reducer
