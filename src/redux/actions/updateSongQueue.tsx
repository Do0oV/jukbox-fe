export const updateSongQueue = () => {
  return {
    type: 'MAKE_CONNECTION',
    socket: {
      command: 'connect',
      // message: 'addSong',
      // data: {
      //   song_id: 'spotify:askfskdfjsldkfj as;lkjf'
      // }
    }
  };
};