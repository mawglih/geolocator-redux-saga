import {
  call,
  put,
} from 'redux-saga/effects';
import {
  GET_LOCATION_SUCCESS,
} from 'actions';

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log('Latitude: ', lat);
        console.log('Longitude: ', long);
      },
      function errorCallback(error) {
          console.log(error);
      },
      {
          maximumAge:Infinity,
          timeout:5000
      }
    )
  } else { 
    console.log('Geolocation is not supported by this browser.');
  }
};

export function* geoSaga() {
  const response = yield call(getLocation);
  console.log('response is :', response);
  yield put(GET_LOCATION_SUCCESS(response));
}

export default {};
