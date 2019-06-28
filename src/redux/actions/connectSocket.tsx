export const connectSocket = (userEmail: string) => {
  return {
    type: 'MAKE_CONNECTION',
    socket: {
      command: 'connect',
      message: {
        route: 'connectUserToVenue',
        data: {
          userEmail
        }
      }
    }
  };
};