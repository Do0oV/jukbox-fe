const initialState = {
  userStats : {
    name: '',
    email: '',
    tickets: 0,
    diamonds: 0
  },
  searchResults: {},
  addSongToQueue: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'PENDING':
      return {
      };
    case 'SUCCESS':
      return {
      };
    case 'FAILURE':
      return {
      };
    default:
      return state;
  }
};
