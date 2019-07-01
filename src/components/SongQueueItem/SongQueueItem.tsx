import React from 'react';
import './SongQueueItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';

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

const SongQueueItem: React.FC = () => {

  return (
    <ListItem className="ListItem">
      <div style={{ marginLeft: 12 }}>
        <img height="60px" width="60px" src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
      </div>
      <Container>
        <StyledSong>Cut To The Feeling</StyledSong>
        <StyledArtist>Carly Rae Jepsen</StyledArtist>
      </Container>
      <DiamondIcon type="sketch-circle" theme="filled" />
      <StarIcon type="star" theme="outlined" />
    </ListItem>
  );
}

export default SongQueueItem;

<ListItem className="ListItem">
  <img height="60px" width="60px" src={song.album_cover[0]} />
  <Container>
    <StyledSong>{song.title}</StyledSong>
    <StyledArtist>{song.artist}</StyledArtist>
  </Container>
  <DiamondIcon type="sketch-circle" theme="filled" />
  <StarIcon type="star" theme="outlined" />
</ListItem>