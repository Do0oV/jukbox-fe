import React, { useState } from 'react';
import './SearchResListItem.css';
import { CurrentSong } from '../../types';
import { Redirect } from 'react-router';

const SearchResListItem: React.FC<{ song: any }> = ({ song }) => {

  // This needs to be handled with Redux, so AddSongConfirmModal has access to it:
  const initialState = { song_id: 'N/A', artist: 'N/A', title: 'N/A', album: 'N/A', album_cover: 'N/A', duration: 0 };
  const [selectedSong, setSelectedSong] = useState(initialState);

  const handleOnClick = (song: any) => {
    const song_id = song.id;
    const artist = song.artists[0].name;
    const title = song.name;
    const album = song.album.name;
    const album_cover = song.album.images[0].url;
    const duration = song.duration;
    setSelectedSong({ song_id, artist, title, album, album_cover, duration });
  };

  return (
    <div className="SearchResList">
      { song.name } by { song.artists[0].name } ({ song.album.name })
      {
        selectedSong.song_id === 'N/A'
          ? <div onClick={() => handleOnClick(song)}>
              <button>+</button>
            </div>
          : null
      }
    </div>
  );
}
{/* <Redirect to="/addsongconfirmmodal" /> */}

export default SearchResListItem;
