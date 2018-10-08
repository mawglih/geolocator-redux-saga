import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLocationStart } from 'actions';


class Location extends Component {
  onGetLocation = () => {
    this.props.getLocationStart();
  }
  
  render() {
    const {
      latitude,
      longitude,
      address,
      city,
      locality,
    } = this.props;
    return (
      <div>
        <button onClick={this.onGetLocation}>Get coordinates</button>
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
          <h1>Welcome to {city}, {locality}</h1>
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
    locality: state.location.locality,
  }
);

export default connect(mapStateToProps, { getLocationStart })(Location);
