import React, { useEffect } from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';
import SearchResList from '../../components/SearchResList/SearchResList';
import { getUserProfile } from '../../redux/actions/'

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResults.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchSongs(event.currentTarget.value));
  };

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      { searchResults ? <SearchResList songs={searchResults} /> : null }
    </div>
  );
}

export default Search;