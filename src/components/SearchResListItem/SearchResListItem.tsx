import React from 'react';
import './SearchResListItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles'
import styled from 'styled-components';
import { Icon } from 'antd';

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

const SearchResListItem: React.FC = () => {

  return (
    <ListItem className="ListItem">
      <div style={{ marginLeft: 12 }}>
        <img height="60px" width="60px" src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
      </div>
      <StyledSong>Cut To The Feeling</StyledSong>
      <StyledArtist>Carly Rae Jepsen</StyledArtist>
      <StyledIcon type="plus-circle" />
    </ListItem>
  );
}

export default SearchResListItem;
