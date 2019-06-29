import React from 'react';
import './SearchResList.css';
import { CurrentSong } from '../../types';
import SearchResListItem from '../SearchResListItem/SearchResListItem';

const SearchResList: React.FC<{ songs: any }> = ({ songs }) => {
  return (
    <div className="SearchResList h2">
      {(songs && songs.length)
        ? songs.map((song: any, id: any) => <SearchResListItem key={id} song={song} />)
        : null
      }
    </div>
  );
}

export default SearchResList;
