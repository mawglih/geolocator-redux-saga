export const GET_LOCATION_START = 'GET_LOCATION_START';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';

export const getLocationStart = () => {
  return {
    type: GET_LOCATION_START,
  };
};

export const getLocationSuccess = (payload) => {
  console.log('payload: ', payload);
  return {
    type: GET_LOCATION_SUCCESS,
    location: payload,
  };
};

export const getLocationFailure = (payload) => {
  return {
    type: GET_LOCATION_FAILURE,
    error: payload,
  };
};