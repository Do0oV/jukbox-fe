export const lockNextRequest = () => ({
  type: 'SEND_NEXT_SONG',
  method: 'GET',
  endpoint: 'next',
});