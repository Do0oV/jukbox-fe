import React, { useState } from 'react';
import './SearchResListItem.css';
import { CurrentSong } from '../../types';
import { Redirect } from 'react-router';
import FlashMessage from 'react-flash-message';

const SearchResListItem: React.FC<{ song: CurrentSong }> = ({ song }) => {

  // This needs to be handled with Redux, so AddSongConfirmModal has access to it:
  const initialState = { song_id: 'N/A', artist: 'N/A', title: 'N/A', album: 'N/A', album_cover: 'N/A', duration: 0 };
  const [selectedSong, setSelectedSong] = useState(initialState);

  const handleOnClick = (song: CurrentSong) => {
    setSelectedSong(song);
  };

  return (
    <div className="SearchResList">
      song.title
      {
        selectedSong.song_id === 'N/A'
          ? <div onClick={() => handleOnClick(song)}>
              +
            </div>
          : <FlashMessage duration={5000} persistOnHover={true}>
              <Redirect to="/addsongconfirmmodal" />
            </FlashMessage>
      }
    </div>
  );
}

export default SearchResListItem;
