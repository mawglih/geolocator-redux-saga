import {
  GET_LOCATION_SUCCESS,
  GET_ADDRESS_SUCCESS,
} from 'actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  address: '',
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case GET_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude,
      };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
}