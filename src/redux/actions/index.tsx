export const addSongToQueue = (song: any) => ({ 
  type: 'ADD_SONG_TO_QUEUE',
  method: 'POST',
  endpoint: '/playlist:venueName',
  headers: 'content-length:540',
  body: `${song}`
});

export const getUserProfile = () => ({ 
  type: 'GET_USER_STATS',
  method: 'GET',
  endpoint: '/me',
});

export const isLocked = (bool:boolean) => ({
  type: 'SET_FLAG',
  data: bool
});

export const lockNextRequest = () => ({
  type: 'SEND_NEXT_SONG',
  method: 'GET',
  endpoint: '/next',
});

export const playSong = (deviceId: string) => ({
  type: 'PLAY_SONG',
  method: 'GET',
  endpoint: `/playdevice/${deviceId}`
});

export const searchSongs = (searchTerm: string) => ({ 
  type: 'SEARCH_SONGS',
  method: 'GET',
  endpoint: `/search?q=${searchTerm}`,
  headers: {
    'Content-Type': 'text/plain',
  }
});

export const setAccessToken = (access_token: string) => ({
  type: 'SET_ACCESS_TOKEN',
  access_token: access_token
});

export const setCurrentSong = (song: any) => ({
  type: 'SET_CURRENT_SONG',
  data: song
});

export const setDeviceId = (device_id: string) => ({
  type: 'SET_DEVICE_ID',
  device_id: device_id
});

export const setLogIn = () => ({
  type: 'SET_LOGGED_IN',
  data: true
});

export const setSongPosition = (position: number) => ({
  type: 'SET_SONG_POSITION',
  data: position
});

export const updateSongQueue = () => {
  return {
    type: 'MAKE_CONNECTION',
    socket: {
      command: 'connect',
    }
  };
};