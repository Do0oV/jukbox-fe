import React from 'react';
import './SearchResListItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';

const StyledIcon = styled(Icon)`
margin-right: 35px;
svg {
  fill: var(--secondary-color);
  height: 2.5em;
  width: 2.5em;
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
  font-size: 10px;
}`;

const Container = styled.div`
display: flex;
flex-direction: column;
`
const SearchResListItem: React.FC = () => {

  return (
    <>
      <ListItem className="ListItem">
        <div style={{ marginLeft: 12 }}>
          <img height="60px" width="60px" src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
        </div>
        <Container>
          <StyledSong>Cut To The Feeling</StyledSong>
          <StyledArtist>Carly Rae Jepsen</StyledArtist>
        </Container>
        <StyledIcon type="plus-circle" />
      </ListItem>

      <ListItem className="ListItem">
        <div style={{ marginLeft: 12 }}>
          <img height="60px" width="60px" src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
        </div>
        <Container>
          <StyledSong>Cut To The Feeling</StyledSong>
          <StyledArtist>Carly Rae Jepsen</StyledArtist>
        </Container>
        <StyledIcon type="plus-circle" />
      </ListItem>
    </>
  );
}

export default SearchResListItem;
