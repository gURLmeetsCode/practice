import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getAircraftsThunk} from '../reducers/aircraftsReducer'
import {getCountriesThunk} from '../reducers/countriesReducer'

import {Link} from 'react-router-dom'


class DisconnectedAllCountries extends Component {


  componentDidMount () {
    this.props.getAircrafts()
    this.props.getCountries()
  }



  render () {
    return (
      <div>
        <h4>List of All Countries</h4>
        {!this.props.aircrafts.allAircrafts || !this.props.countries.allCountries ? (
            <div>[]</div>
          ) : (
            this.props.countries.allCountries.map(country => (
              <div key={country.id}>
                  <Link to={`/countries/${country.id}`}>
                    {country.name}
                  </Link>
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

export const AllCountries = connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCountries)
