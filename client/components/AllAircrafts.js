import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getAircraftsThunk} from '../reducers/aircraftsReducer'
import {getCountriesThunk} from '../reducers/countriesReducer'

import {Link} from 'react-router-dom'




class DisconnectedAllAircrafts extends Component {


  componentDidMount () {
    this.props.getAircrafts()
    this.props.getCountries()
  }



  render () {
    return (
        <div>
        <h4>List of All Aircrafts</h4>
        {!this.props.aircrafts.allAircrafts || !this.props.countries.allCountries ? (
            <div>[]</div>
          ) : (
            this.props.aircrafts.allAircrafts.map(aircraft => (
              <div key={aircraft.id}>
                  <Link to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>
                  <div>Owned by: {aircraft.country.name}</div>
              </div>
            ))
          )}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  aircrafts: state.aircrafts,
  countries: state.countries
})



const mapDispatchToProps = dispatch => ({
  getAircrafts: () => dispatch(getAircraftsThunk()),
  getCountries: () => dispatch(getCountriesThunk())
})

export const AllAircrafts = connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllAircrafts)
