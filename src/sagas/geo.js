import {
  call,
  put,
  take,
} from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import {
  displayLocation,
  getLocation,
} from 'utilities';

import {
  getLocationSuccess,
  getAddressSuccess,
  getAddressStart,
} from 'actions';

export function* geoSaga() {
  const location = yield call(getLocation);
  // const data = location.coords;
  // yield take(getAddressStart);
  console.log('response in saga is :', location.coords);
  yield put(getLocationSuccess(location.coords));
  const address = yield call(displayLocation, location.coords);
  console.log('address in saga is: ', address);
  yield put(getAddressSuccess(address));
}

export default {};
