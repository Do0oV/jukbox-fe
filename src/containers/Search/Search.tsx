import React from 'react';
import './Search.css';
import { searchSongs } from '../../redux/actions/searchSongs'
import { useSelector, useDispatch } from 'react-redux';

const Search: React.FC = () => {
  
  const searchResults = useSelector((state: any) => state.api.searchResults)
  const dispatch = useDispatch();
  
  const handleChange = (event: any) => {
    dispatch(searchSongs(event.currentTarget.value));    
  }

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      {/* {searchResults.songs.length && */}
      {console.log(searchResults)}
      <h2>{ 'name:  ' + searchResults.songs.songs}</h2>
      {/* <h2>{ 'email:  ' + searchResults. }</h2>
      <h2>{ 'tickets:  ' + searchResults. }</h2>
      <h2>{ 'diamonds:  ' + searchResults. }</h2> */}
    </div>
  );
}

export default Search;
