export const updateSongDiamonds = (songId: string, userEmail: string) => {
  return { 
    type: 'ADD_SONG_DIAMONDS',
    socket: {
      command: 'updateSongQueue',
      message: 'updateSongDiamonds',
      data: {
        songId,
        userEmail
      },
      response: 'updatedPlaylist'
    }
  };
};