import { takeLatest } from 'redux-saga/effects';
import { GET_LOCATION_START } from '../actions';
import { geoSaga } from './geo';

export function* watchFetch() {
  yield takeLatest(GET_LOCATION_START, geoSaga);
};
