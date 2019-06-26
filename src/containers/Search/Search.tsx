import React from 'react';
import './Search.css';
import { useSelector } from 'react-redux';
import { searchSongs } from '../../redux/actions/searchSongs'

const Search: React.FC = () => {

  const userStats = useSelector((state: any) => state.userStats)

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    searchSongs();
  }

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      {userStats}
    </div>
  );
}

export default Search;
