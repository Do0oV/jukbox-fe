import React from 'react';
import './SongQueueItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';
import { CurrentSong } from '../../types';

const DiamondIcon = styled(Icon)`
font-size: 40px;
color: var(--second-color);
svg {
  fill: var(--secondary-color);
}

&:hover {
  opacity: .8;
}`;

const StarIcon = styled(Icon)`
font-size: 40px;
color: var(--second-color);
svg {
  fill: var(--secondary-color);
}

&:hover {
  opacity: .8;
}`;

const StyledArtist = styled(Artist)`
color: var(--fourth-color);
@media(max-width: 625px) {
  font-size: 10px;
}`;

const StyledSong = styled(Song)`
@media(max-width: 625px) {
  font-size: 10px;
}`;

const Container = styled.div`
display: flex;
flex-direction: column;
`

const SongQueueItem: React.FC<{ song: CurrentSong }> = ({ song }) => {

  return (
    <ListItem className="ListItem">
      <img height="60px" width="60px" src={song.album_cover[0]} />
      <Container>
        <StyledSong>{song.title}</StyledSong>
        <StyledArtist>{song.artist}</StyledArtist>
      </Container>
      <DiamondIcon type="sketch-circle" theme="filled" />
      <StarIcon type="star" theme="outlined" />
    </ListItem>
  );
}

export default SongQueueItem;

