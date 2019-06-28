export const addSongToQueue = (songId: string, userEmail: string) => {
  return { 
    type: 'ADD_SONG_TO_QUEUE',
    socket: {
      command: 'updateSongQueue',
      message: 'addSong',
      data: {
        songId,
        userEmail
      },
      response: 'updatedPlaylist'
    }
  };
};