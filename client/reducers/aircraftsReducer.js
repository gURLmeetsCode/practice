import axios from 'axios'


// ACTION TYPES
const GET_AIRCRAFTS = 'GET_AIRCRAFTS'
const GET_A_AIRCRAFT = 'GET_A_AIRCRAFT'


// ACTION CREATOR
export const gotAircraftsActionCreator = (data) => ({
  type: GET_AIRCRAFTS,
  aircrafts:data
})

export const gotAAircraftActionCreator = data => ({
  type: GET_A_AIRCRAFT,
  aircrafts: data
})


// THUNK CREATORS
export const getAircraftsThunk = () => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/api/aircrafts')
      dispatch(gotAircraftsActionCreator(response.data))
    }
    catch(err){
      console.error(err, "your get aircrafts thunky thunk is broken shawty!")
    }
  }
}

export const getAAircraftThunk = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/aircrafts/${id}`)
      dispatch(gotAAircraftActionCreator(response.data))
    }
    catch (err) {
      console.error(err, "your get a single aircraft thunky thunk is broken")
    }
  }
}


// REDUCER
const reducer = (state = {}, action) => {
  switch(action.type){
    case GET_AIRCRAFTS:
      return {
        ...state,
        allAircrafts: action.aircrafts
      }
    case GET_A_AIRCRAFT:
      return {
        ...state,
        singleAircraft: action.aircrafts
      }
    default:
      return state
  }
}


export default reducer
