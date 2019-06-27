export const addSongToQueue = (song: any) => ({ 
  type: 'ADD_SONG_TO_QUEUE',
  method: 'POST',
  endpoint: '/playlist:venueName',
  headers: 'content-length:540',
  body: `${song}`
});