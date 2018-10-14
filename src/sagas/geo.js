import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  REVERSE_URL,
  GOOGLE_API,
} from 'api/constants';
import {
  getLocation,
  filterForAddress,
  filterForCity,
  filterForState,
  filterForPlace,
} from 'utilities';
import {
  getLocationSuccess,
  getAddressSuccess,
  getCitySuccess,
  getStateSuccess,
  getPlaceSuccess,
  GET_LOCATION_START,
} from 'actions';

export function* geoSaga() {
  const location = yield call(getLocation);
  yield put(getLocationSuccess(location.coords));
  const URL = `${REVERSE_URL}latlng=${location.coords.latitude},${location.coords.longitude}&sensor=true&key=${GOOGLE_API}`;
  console.log('response in saga is :', location.coords);
  const response = yield call(axios, URL);
  console.log('data in saga: ', response);
  const data = yield(response.data.results);
  const address = yield call(filterForAddress, data);
  console.log('address in saga is: ', address);
  yield put(getAddressSuccess(address));
  const city = yield call(filterForCity, data);
  console.log('city in saga: ', city);
  yield put(getCitySuccess(city));
  const state = yield call(filterForState, data);
  yield console.log('state in saga: ', state);
  yield put(getStateSuccess(state));
  const place = yield call(filterForPlace, data);
  yield console.log('place in saga: ', place);
  yield put(getPlaceSuccess(place));
}

export function* geo() {
  yield takeLatest(GET_LOCATION_START, geoSaga);
}

export default {};
