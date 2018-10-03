import {
  call,
  put,
} from 'redux-saga/effects';

import {
  getLocationSuccess,
} from 'actions';

const getLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error),
  )
}); 

const getAddress = (latitude, longitude) => {
  return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      var method = 'GET';
      var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
      var async = true;

      request.open(method, url, async);
      request.onreadystatechange = function () {
          if (request.readyState == 4) {
              if (request.status == 200) {
                  var data = JSON.parse(request.responseText);
                  var address = data.results[0];
                  resolve(address);
              }
              else {
                  reject(request.status);
              }
          }
      };
      request.send();
  });
};

export function* geoSaga() {
  const location = yield call(getLocation);
  const data = location.coords;
  console.log('response is :', data);
  yield put(getLocationSuccess(data));
}

export default {};
