const initialState = {
  flag: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case '':
      return {
        ...state,
        flag: !state.flag
      };
    default:
      return state;
  }
};
