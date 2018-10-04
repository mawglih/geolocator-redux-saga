import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getLocationStart } from 'actions';
// import { loadGoogleMapApi } from 'api';

class Location extends Component {
  onGetLocation = () => {
    this.props.getLocationStart();
  }
  
  render() {
    const {
      latitude,
      longitude,
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
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
  }
);

export default connect(mapStateToProps, { getLocationStart })(Location);
