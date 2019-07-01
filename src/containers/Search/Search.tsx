import React, { useEffect } from 'react';
import './Search.css';
<<<<<<< HEAD
import { searchSongs, addSongToQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList';
import { getUserProfile } from '../../redux/actions/'

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResults.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [])

=======
import { searchSongs } from '../../redux/actions/searchSongs';
import { useSelector, useDispatch } from 'react-redux';
import { addSongToQueue } from '../../redux/actions/addSongToQueue';
import { CurrentSong } from '../../types';
import SearchResList from '../../components/SearchResList/SearchResList';

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResultsReducer.songs);
  const dispatch = useDispatch();

>>>>>>> c5a672a86d1e2e002d2aadabf505e40990e34b40
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
<<<<<<< HEAD
      { searchResults ? <SearchResList songs={searchResults} /> : null }
=======
      { searchResults.tracks ? <SearchResList songs={searchResults.tracks.items} /> : null }
>>>>>>> c5a672a86d1e2e002d2aadabf505e40990e34b40
    </div>
  );
}

export default Search;