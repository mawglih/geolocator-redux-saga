import { takeLatest } from 'redux-saga/effects';
import { GET_LOCATION_START } from '../actions';
import {
  geoSaga2,
 } from './geo2';

export function* watchFetch() {
  yield takeLatest(GET_LOCATION_START, geoSaga2);
};
