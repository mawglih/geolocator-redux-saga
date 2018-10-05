export const GET_LOCATION_START = 'GET_LOCATION_START';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
export const GET_ADDRESS_START = 'GET_ADDRESS_START';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE';
export const GET_CITY_START = 'GET_CITY_START';
export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS';
export const GET_CITY_FAILURE = 'GET_CITY_FAILURE';
export const GET_STATE_START = 'GET_STATE_START';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_FAILURE = 'GET_STATE_FAILURE';

export const getLocationStart = () => {
  return {
    type: GET_LOCATION_START,
  };
};

export const getLocationSuccess = (payload) => {
  console.log('data in action: ', payload);
  // console.log('address in action: ', address);
  return {
    type: GET_LOCATION_SUCCESS,
    payload,
  };
};

export const getLocationFailure = (payload) => {
  return {
    type: GET_LOCATION_FAILURE,
    error: payload,
  };
};

export const getAddressStart = (payload) => {
  return {
    type: GET_ADDRESS_START,
    payload,
  };
};

export const getAddressSuccess = (payload) => {
  console.log('address in action: ', payload);
  return {
    type: GET_ADDRESS_SUCCESS,
    payload,
  };
};

export const getAddressFailure = (error) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload: error,
  };
};

export const getCityStart = (payload) => {
  return {
    type: GET_CITY_START,
    payload,
  };
};

export const getCitySuccess = (payload) => {
  console.log('City in action: ', payload);
  return {
    type: GET_CITY_SUCCESS,
    payload,
  };
};

export const getCityFailure = (error) => {
  return {
    type: GET_CITY_SUCCESS,
    payload: error,
  };
};

export const getStateStart = (payload) => {
  return {
    type: GET_STATE_START,
    payload,
  };
};

export const getStateSuccess = (payload) => {
  console.log('STATE in action: ', payload);
  return {
    type: GET_STATE_SUCCESS,
    payload,
  };
};

export const getStateFailure = (error) => {
  return {
    type: GET_STATE_SUCCESS,
    payload: error,
  };
};