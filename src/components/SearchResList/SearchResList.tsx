import React from 'react';
import './SearchResList.css';
import { CurrentSong } from '../../types';
import SearchResListItem from '../SearchResListItem/SearchResListItem';

const SearchResList: React.FC<{ songs: Array<CurrentSong> }> = ({ songs }) => {
  return (
    <div className="SearchResList h2">
      {(songs && songs.length)
        ? songs.map((song: CurrentSong) => <SearchResListItem key={song.song_id} song={song} />)
        : null
      }
    </div>
  );
}

export default SearchResList;
