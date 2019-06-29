import React from 'react';
import './Search.css';
import { searchSongs, addSongToQueue } from '../../redux/actions/'
import { useSelector, useDispatch } from 'react-redux';

const Search: React.FC = () => {

  const searchResults = useSelector((state: any) => state.searchResultsReducer.songs)
  const userEmail = useSelector((state: any) => state.userStatsReducer.userStats.email);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(searchSongs(event.currentTarget.value));
  }

  const handleOnClick = (song: any) => {
    const songId = song.song_id;
    dispatch(addSongToQueue(songId, userEmail));
  }

  return (
    <div className="Search">
      <form>
        <input type="text" onChange={handleChange} />
      </form>
      <h2>
        {(searchResults.songs && searchResults.songs.length)
          ? searchResults.songs
            .map((el: any, index: number) => <li key={index} value={el} onClick={() => handleOnClick(el)}>{el.title}</li>)
          : null
        }
      </h2>
    </div>
  );
}

export default Search;