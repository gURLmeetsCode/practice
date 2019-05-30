import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getAAircraftThunk} from '../reducers/aircraftsReducer'

import {Link} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class DisconnectedSingleAircraft extends Component {


  componentDidMount () {
    const { match: { params } } = this.props;
    this.props.getAAircraft(parseInt(params.id))
  }


    render (){

        return (
          <div>
          <h2>Single Aircraft Details</h2>
          {!this.props.aircrafts.singleAircraft.length > 0 ? (
              <div>[]</div>
            ) : (
              this.props.aircrafts.singleAircraft.map(aircraft => (
                <div key={aircraft.id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Cool Flag"
                        height="140"
                        image={aircraft.country.flagUrl}
                        title="aircraft details"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Single Aircraft Details
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Name: {aircraft.make}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Model: {aircraft.model}
                        </Typography><Typography variant="body2" color="textSecondary" component="p">
                          Type: {aircraft.type}
                        </Typography><Typography variant="body2" color="textSecondary" component="p">
                          Year: {aircraft.year}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Cost: ${aircraft.cost}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          Country Details
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          GFI: {aircraft.country.GFI}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" component={Link}  to={`/countries/${aircraft.country.id}`}>
                        {aircraft.country.name}
                      </Button>
                    </CardActions>
                  </Card>
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
