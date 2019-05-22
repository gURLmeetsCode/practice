import axios from 'axios'


// ACTION TYPES
const GET_COUNTRIES = 'GET_COUNTRIES'
const GET_FIVE_COUNTRIES = 'GET_FIVE_COUNTRIES'
const GET_A_COUNTRY = 'GET_A_COUNTRY'


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


// REDUCER
const reducer = (state = {}, action) => {
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
    default:
      return state
  }
}



export default reducer
