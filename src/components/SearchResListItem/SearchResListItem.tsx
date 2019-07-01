import React, { useState } from 'react';
import './SearchResListItem.css';
import { CurrentSong } from '../../types';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addSongToQueue } from '../../redux/actions';
import { Redirect } from 'react-router';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';
const { confirm } = Modal;

const StyledArtist = styled(Artist)`
color: var(--fourth-color);
@media(max-width: 625px) {
  font-size: 10px;
  margin-right: 15px;
}`;

const StyledSong = styled(Song)`
@media(max-width: 625px) {
  font-size: 10px;
  margin-left: 35px;
}`;

const StyledIcon = styled(Icon)`
margin-right: 35px;
svg {
  fill: white;
  height: 3em;
  width: 3em;
}
opacity: .5;

&:hover {
  opacity: .8;
}`;

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
