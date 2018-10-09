import {
  GET_LOCATION_SUCCESS,
  GET_ADDRESS_SUCCESS,
  GET_CITY_SUCCESS,
  GET_STATE_SUCCESS,
  GET_PLACE_SUCCESS,
} from 'actions';

const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  address: '',
  city: '',
  locality: '',
  place: {},
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
    case GET_CITY_SUCCESS:
      return {
        ...state,
        city: payload,
      };
    case GET_STATE_SUCCESS:
      return {
        ...state,
        locality: payload,
      };
      case GET_PLACE_SUCCESS:
      return {
        ...state,
        place: payload,
      };
    default:
      return state;
  }
}