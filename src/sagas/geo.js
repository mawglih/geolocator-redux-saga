import {
  call,
  put,
} from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import {
  displayLocation,
  getLocation,
} from 'utilities';

import {
  getLocationSuccess,
  getAddressSuccess,
} from 'actions';

export function* geoSaga() {
  const location = yield call(getLocation);
  const data = location.coords;
  const address = yield call(displayLocation, data.latitude, data.longitude);
  console.log('response in saga is :', data);
  console.log('address in saga is: ', address);
  yield put(getLocationSuccess(data));
  yield put(getAddressSuccess(address));
}

export default {};
