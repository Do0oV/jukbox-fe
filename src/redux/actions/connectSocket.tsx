export const connectSocket = (userEmail: string) => {
  return {
    type: 'MAKE_CONNECTION',
    socket: {
      command: 'connect',
      message: 'connectUserToVenue',
      data: {
        userEmail
      },
      response: 'updatedPlaylist'
    }
  };
};