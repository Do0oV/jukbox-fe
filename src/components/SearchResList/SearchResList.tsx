import React from 'react';
import './SearchResList.css';
import { CurrentSong } from '../../types';
import SearchResListItem from '../SearchResListItem/SearchResListItem';

const SearchResList: React.FC<{ songs: Array<CurrentSong> }> = ({ songs }) => {
  return (
    <div className="SearchResList h2">
      {(songs && songs.length)
        ? songs.map((song: CurrentSong, id: number) => <SearchResListItem key={id} song={song} />)
        : null
      }
    </div>
  );
}

export default SearchResList;
