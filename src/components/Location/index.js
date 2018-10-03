import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLocationStart } from 'actions';

class Location extends Component {
  onGetLocation = () => {
    this.props.getLocationStart();
  }
  render() {
    // const showPosition = position => {
    //   const lat = position.coords.latitude;
    //   const long = position.coords.longitude;
    //   console.log('Coordinates are: ');
    //   console.log('Latitude: ', lat);
    //   console.log('Longitude: ', long);
    // }
    // const getLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else { 
    //     console.log('Geolocation is not supported by this browser.');
    //   }
    // };
    return (
      <div>
        <button onClick={this.onGetLocation}>Get coordinates</button>
      </div>
    );
  }
}

export default connect(null, { getLocationStart })(Location);
