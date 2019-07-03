import React, { useState } from 'react';
import './SearchResListItem.css';
import { CurrentSong } from '../../types';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addSongToQueue } from '../../redux/actions';
import { Redirect } from 'react-router';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';
const { confirm } = Modal;

const StyledIcon = styled(Icon)`
svg {
  fill: var(--secondary-color);
  height: 2em;
  width: 2em;
}

&:hover {
  opacity: .8;
}`;

const StyledArtist = styled(Artist)`
color: var(--fourth-color);
transition: 0.5s;
@media(max-width: 625px) {
  font-size: 10px;
}`;

const StyledSong = styled(Song)`
transition: 0.5s;
@media(max-width: 625px) {
  font-size: 8px;
}`;

const Container = styled.div`
margin-left: 10px
align-self: center;
flex-basis: 100%;
display: flex;
flex-direction: column;
`
const SearchResListItem: React.FC<{ song: CurrentSong }> = ({ song }) => {

  const tickets = useSelector((state: any) => state.user.tickets);
  const userAccessToken = useSelector((state: any) => state.user.accessToken);
  const dispatch = useDispatch();
  const [addedSongtoQueue, setAddedSongToQueue] = useState(false);

  function showConfirm(song: CurrentSong) {
    confirm({
      title: `Do you Want to add ${song.title} by ${song.artist} to the queue?`,
      onOk() {
        const stringifiedSong = JSON.stringify(song);
        dispatch((addSongToQueue(stringifiedSong, userAccessToken)));
        setAddedSongToQueue(true);
      }
    });
  }

  return (
    <ListItem className="ListItem">
      {addedSongtoQueue && <Redirect to="/dashboard" />}
      <img height="60px" width="60px" src={song.album_cover[0]} />
      <Container>
        <StyledSong>{song.title}</StyledSong>
        <StyledArtist>{song.artist}</StyledArtist>
      </Container>
      { 
        tickets > 0 
          ? <div >
            <StyledIcon type="plus-circle" onClick={() => showConfirm(song)} />
          </div>
           : null
      }
    </ListItem>
  )
}

export default SearchResListItem;
