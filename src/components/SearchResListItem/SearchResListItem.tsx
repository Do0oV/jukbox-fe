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
  const userProfile = useSelector((state: any) => state.user.userProfile);
  const userAccessToken = useSelector((state: any) => state.user.accessToken);
  const dispatch = useDispatch();
  const [addedSongtoQueue, setAddedSongToQueue] = useState(false);

  function showConfirm(song: CurrentSong) {
    confirm({
      title: `Do you Want to add ${song.title} by ${song.artist} to the queue?`,
      onOk() {
        dispatch((addSongToQueue(songId, userAccessToken)));
        setAddedSongToQueue(true);
      }
    });
  }

  return (
    <div className="SearchResList">
      {addedSongtoQueue && <Redirect to="/dashboard"/>}
      { song.title } by { song.artist } ({ song.album })
      {
        userProfile.tickets > 0
          ? <div onClick={() => showConfirm(song)}>
              <Button>+</Button>
            </div>
          : null
      }
    </div>
  );
}

export default SearchResListItem;
