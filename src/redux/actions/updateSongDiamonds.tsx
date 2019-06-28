export const updateSongDiamonds = (songId: string, userEmail: string) => {
  return { 
    type: 'ADD_SONG_DIAMONDS',
    socket: {
      command: 'updateSongQueue',
      message: {
        route: 'updateSongDiamonds',
        data: {
          songId,
          userEmail
        }
      }
    }
  };
};