import React from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/searchSongs';
import { useSelector, useDispatch } from 'react-redux';
import { addSongToQueue } from '../../redux/actions/addSongToQueue';
import { CurrentSong } from '../../types';
import SearchResList from '../../components/SearchResList/SearchResList';

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResultsReducer.songs);
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      { searchResults.tracks ? <SearchResList songs={searchResults.tracks.items} /> : null }
    </div>
  );
}

export default Search;