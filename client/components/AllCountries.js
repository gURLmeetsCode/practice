import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getCountriesThunk, removeACountryThunk} from '../reducers/countriesReducer'
import Button from '@material-ui/core/Button';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import {Link} from 'react-router-dom'


class DisconnectedAllCountries extends Component {


  componentDidMount () {
    this.props.getCountries()
  }



  render () {
    return (
      <div>
        <h4>List of All Countries</h4>
        {!this.props.countries ? (
            <div>[]</div>
          ) : (
            this.props.countries.map(country => (
              <div key={country.id}>
                  <Link to={`/countries/${country.id}`}>
                    {country.name}
                  </Link>
                  <div>
                    <Link to="/country_form"><CreateTwoToneIcon /></Link>
                    <Link to="/"><DeleteTwoToneIcon onClick={() => this.props.removeACountryDispatch(country.id)}/></Link>
                  </div>
              </div>
            ))
          )}
          <br />
            <Button variant="contained" color="primary" component={Link} to="/country_form">
              Add A New Country
          </Button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  countries: state.countries.allCountries
})



const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch(getCountriesThunk()),
  removeACountryDispatch:(id) => dispatch(removeACountryThunk(id))
})

export const AllCountries = connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCountries)
