export const playSong = (deviceId: string) => ({
  type: 'PLAY_SONG',
  method: 'GET',
  endpoint: `playdevice/${deviceId}/song`
});
