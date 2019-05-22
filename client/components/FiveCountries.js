import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getFiveCountriesThunk} from '../reducers/countriesReducer'





class DisconnectedFiveCountries extends Component {


  componentDidMount () {
    this.props.getFiveCountries()
  }



  render () {
    console.log(this.props.countries)
    return (
        <div>
          <h4>List of top Five Countries</h4>
          {!this.props.countries.onlyFive ? (
              <div>[]</div>
            ) : (
              this.props.countries.onlyFive.map(country => (
                <div key={country.id}>
                  <ul>
                    <li>Country Name: {country.name}</li>
                    <div>GFI: {country.GFI}</div>
                  </ul>
                </div>
              ))
            )}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries
})


const mapDispatchToProps = dispatch => ({
  getFiveCountries: () => dispatch(getFiveCountriesThunk())
})

export const FiveCountries = connect(mapStateToProps, mapDispatchToProps)(DisconnectedFiveCountries)
