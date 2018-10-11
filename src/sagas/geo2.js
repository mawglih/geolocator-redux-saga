import {
  call,
  put,
} from 'redux-saga/effects';
import {
  Coord,
} from 'utilities';
import {
  getLocationSuccess,
} from 'actions';

export function* geoSaga2() {
  const response = yield call(Coord);
  const data = yield call(response.json);
  console.log('data is: ', data);
  yield put(getLocationSuccess(data));
};

export default {};
