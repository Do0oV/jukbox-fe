export const searchSongs = () => ({ 
  type: 'SEARCH_SONGS',
  method: 'GET',
  endpoint: '/:search?q=SEARCH_TERM',
});