export const GET_LOCATION_START = 'GET_LOCATION_START';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
export const GET_ADDRESS_START = 'GET_ADDRESS_START';
export const GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS';
export const GET_ADDRESS_FAILURE = 'GET_ADDRESS_FAILURE';

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