import React from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/searchSongs'
import { useSelector, useDispatch } from 'react-redux';

const Search: React.FC = () => {
  
  const searchResults = useSelector((state: any) => state.searchResultsReducer.songs)
  const dispatch = useDispatch();
  
  const handleChange = (event: any) => {
    dispatch(searchSongs(event.currentTarget.value));    
  }

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      {console.log(searchResults.songs)}
      <h2>{ 'Search Results:  ' + searchResults.songs}</h2>
    </div>
  );
}

export default Search;
