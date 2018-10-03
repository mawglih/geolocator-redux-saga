import React, { Component } from 'react'

export default class Location extends Component {

  render() {
    const showPosition = position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log('Coordinates are: ');
      console.log('Latitude: ', lat);
      console.log('Longitude: ', long);
    }
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        console.log('Geolocation is not supported by this browser.');
      }
    };
    return (
      <div>
        <button onClick={getLocation}>Get coordinates</button>
      </div>
    );
  }
}
