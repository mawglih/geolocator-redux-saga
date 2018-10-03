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
//   const position = {};
//   if (navigator.geolocation) {
//     yield delay(5000);
//     yield navigator.geolocation.getCurrentPosition(
//       function(position) {
//         const lat = position.coords.latitude;
//         const long = position.coords.longitude;
//         console.log('Latitude: ', lat);
//         console.log('Longitude: ', long);
//         console.log('position: ', position);
//         return position.coords;
//       },
//       function errorCallback(error) {
//           console.log(error);
//       },
//       {
//           maximumAge:Infinity,
//           timeout:5000
//       }
//       location => 
//     )
//   } else { 
//     console.log('Geolocation is not supported by this browser.');
//   }
// };

export function* geoSaga() {
  const location = yield call(getLocation);
  const data = location.coords;
  console.log('response is :', data);
  yield put(getLocationSuccess(data));
}

export default {};
