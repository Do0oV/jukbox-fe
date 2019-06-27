export const searchSongs = (searchTerm: string) => ({ 
  type: 'SEARCH_SONGS',
  method: 'GET',
  endpoint: `search?q=${searchTerm}`,
  headers: {
    'Content-Type': 'text/plain',
  }
});