import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocationStart } from 'actions';
import './Location.css';

class Location extends Component {
  
  render() {
    const {
      latitude,
      longitude,
      address,
      place,
      getLocationStart,
    } = this.props;
    return (
      <div className="main">
        <button onClick={getLocationStart} className="coordinates">Get coordinates</button>
        <div>
          <p>Our Latitude is {latitude}</p>
          <p>Our Longitude is {longitude}</p>
        </div>
        <hr />
        <div>
          <p>Google maps postion is:</p>
          <span>{address}</span>
        </div>
        <hr />
        <div>
          <h1>
            {'Welcome to '} 
            <span>
              {place.city}
            </span>
            <span>
              {place.city ? ', ' : null }
            </span>
            <span>
              {place.state ? place.state : null}
            </span>
            <span>
              {place.state ? null : place.country}
            </span>
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
    address: state.location.address,
    city: state.location.city,
    place: state.location.place,
  }
);

export default connect(mapStateToProps, { getLocationStart })(Location);
