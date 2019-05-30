import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getACountryThunk} from '../reducers/countriesReducer'

import {Link} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                  <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Cool Aircraft"
                          height="140"
                          image={aircraft.imageUrl}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h3">
                            Aircraft Details
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Model: {aircraft.model}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Type: {aircraft.type}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Year: {aircraft.year}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Cost: ${aircraft.cost}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" component={Link} to={`/aircrafts/${aircraft.id}`}>
                          {aircraft.make}
                        </Button>
                      </CardActions>
                    </Card>
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
