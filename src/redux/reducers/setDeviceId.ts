import Reducer from 'redux';

const initialState = '';

const setDeviceId: Reducer.Reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case 'SET_DEVICE_ID':
      return action.device_id;
    case 'REMOVE_DEVICE_ID':
      return '';
    default:
      return state;
  }
};

export default setDeviceId;