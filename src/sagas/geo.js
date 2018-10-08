import {
  call,
  put,
} from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import {
  displayLocation,
  getLocation,
  filterForAddress,
  filterForCity,
  filterForState,
} from 'utilities';

import {
  getLocationSuccess,
  getAddressSuccess,
  getCitySuccess,
  getStateSuccess,
} from 'actions';

export function* geoSaga() {
  const location = yield call(getLocation);
  yield put(getLocationSuccess(location.coords));
  console.log('response in saga is :', location.coords);
  const data = yield call(displayLocation, location.coords);
  console.log('data in saga: ', data);
  const address = yield call(filterForAddress, data);
  console.log('address in saga is: ', address);
  yield put(getAddressSuccess(address));
  const city = yield call(filterForCity, data);
  console.log('city in saga: ', city);
  yield put(getCitySuccess(city));
  const state = yield call(filterForState, data);
  yield console.log('state in saga: ', state);
  yield put(getStateSuccess(state));
}

export default {};
