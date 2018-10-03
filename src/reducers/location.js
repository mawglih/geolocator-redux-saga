import {
  GET_LOCATION_SUCCESS,
} from 'actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude,
      };
    default:
      return state;
  }
}