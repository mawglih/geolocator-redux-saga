import {
  call,
  put,
} from 'redux-saga/effects';

import {
  getAddress,
  getLocation,
} from 'utilities';

import {
  getLocationSuccess,
} from 'actions';

export function* geoSaga() {
  const location = yield call(getLocation);
  const data = location.coords;
  const address = yield call(getAddress(data.latitude, data.longitude));
  console.log('response is :', data);
  console.log('address is: ', address);
  yield put(getLocationSuccess(data));
}

export default {};
