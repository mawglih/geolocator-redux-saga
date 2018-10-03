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

export function* geoSaga() {
  const location = yield call(getLocation);
  const data = location.coords;
  console.log('response is :', data);
  yield put(getLocationSuccess(data));
}

export default {};
