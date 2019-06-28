import React from 'react';
import './Search.css';
import { searchSongs, addSongToQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList';

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResults.songs)
  const userEmail = useSelector((state: any) => state.user.userProfile.email);
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      <SearchResList songs={searchResults.songs} />
    </div>
  );
}

export default Search;