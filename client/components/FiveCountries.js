import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getFiveCountriesThunk} from '../reducers/countriesReducer'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



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
                  <Paper>
                    <Avatar alt="country flag" src={country.flagUrl}/>
                    <Typography component="p">
                      Country Name: {country.name}
                    </Typography>
                    <Typography component="p">
                      GFI: {country.GFI}
                    </Typography>
                  </Paper>
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
