import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getAAircraftThunk} from '../reducers/aircraftsReducer'

import {Link} from 'react-router-dom'


class DisconnectedSingleAircraft extends Component {


  componentDidMount () {
    const { match: { params } } = this.props;
    this.props.getAAircraft(parseInt(params.id))
  }



    render () {
      return (
        <div>
        <h2>Single Aircraft Details</h2>
        {!this.props.aircrafts.singleAircraft.length > 0 ? (
            <div>[]</div>
          ) : (
            this.props.aircrafts.singleAircraft.map(aircraft => (
              <div key={aircraft.id}>
                <h3>Aircraft Details</h3>
                <p>Name: {aircraft.make}</p>
                <p>Model: {aircraft.model}</p>
                <p>Type: {aircraft.type}</p>
                <p>Year: {aircraft.year}</p>
                <p>Cost: ${aircraft.cost}</p>
                <hr/>
                <h2>Country Details</h2>
                <Link to={`/countries/${aircraft.country.id}`}>{aircraft.country.name}</Link>
                <br />
                <img src={aircraft.country.flagUrl} alt="cool aircraft" />
                <p>GFI: {aircraft.country.GFI}</p>
              </div>

            ))
          )}
        </div>
      )
    }

}

const mapStateToProps = state => ({
  aircrafts: state.aircrafts
})



const mapDispatchToProps = dispatch => ({
  getAAircraft: (id) => dispatch(getAAircraftThunk(id))
})

export const SingleAircraft = connect(mapStateToProps, mapDispatchToProps)(DisconnectedSingleAircraft)
