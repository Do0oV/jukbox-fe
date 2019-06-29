import React, { useState } from 'react';
import './SearchResListItem.css';
import { CurrentSong } from '../../types';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addSongToQueue } from '../../redux/actions';
import { Redirect } from 'react-router';
const { confirm } = Modal;

const SearchResListItem: React.FC<{ song: CurrentSong }> = ({ song }) => {

  const songId = song.song_id;
  const userEmail = useSelector((state: any) => state.user.userProfile.email);
  const dispatch = useDispatch();
  const [addedSongtoQueue, setAddedSongToQueue] = useState(false);

  function showConfirm(song: CurrentSong) {
    confirm({
      title: `Do you Want to add ${song.title} by ${song.artist} to the queue?`,
      onOk() {
        dispatch((addSongToQueue(songId, userEmail)));
        setAddedSongToQueue(true);
        console.log(`Added to queue: ${song.title} by ${song.artist}`);
        console.log(userEmail);
      }
    });
  }

  return (
    <div className="SearchResList">
      {addedSongtoQueue && <Redirect to="/dashboard"/>}
      { song.title } by { song.artist } ({ song.album })
      <div onClick={() => showConfirm(song)}>
        <Button>+</Button>
      </div>
    </div>
  );
}

export default SearchResListItem;
