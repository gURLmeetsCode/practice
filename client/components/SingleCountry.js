import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getACountryThunk} from '../reducers/countriesReducer'

import {Link} from 'react-router-dom'


class DisconnectedSingleCountry extends Component {


  componentDidMount () {
    const { match: { params } } = this.props;
    this.props.getACountry(parseInt(params.id))
  }



    render () {
      const singleCountry = this.props.countries.singleCountry
      return (
        <div>
        <h2>Single Country Details</h2>
        {!this.props.countries.singleCountry.aircraft ? (
            <div>[]</div>
          ) : (
            <div>
              <p>Name: {singleCountry.name}</p>
              <img src={singleCountry.flagUrl} alt="cool aircraft" />
              <p>GFI: {singleCountry.GFI}</p>
              <hr />
              {this.props.countries.singleCountry.aircraft.map(aircraft => (
                <div key={aircraft.id}>
                    <h3>Aircraft Details</h3>
                    <Link to={`/aircrafts/${aircraft.id}`}>{aircraft.make}</Link>
                    <p>Model: {aircraft.model}</p>
                    <p>Type: {aircraft.type}</p>
                    <p>Year: {aircraft.year}</p>
                    <p>Cost: ${aircraft.cost}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

}

const mapStateToProps = state => ({
  countries: state.countries
})



const mapDispatchToProps = dispatch => ({
  getACountry: (id) => dispatch(getACountryThunk(id))
})

export const SingleCountry = connect(mapStateToProps, mapDispatchToProps)(DisconnectedSingleCountry)
