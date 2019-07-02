import React from 'react';
import './SongQueueItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Icon } from 'antd';
import { SongQueue, CurrentSong } from '../../types';
import { useSelector } from 'react-redux';

const DiamondIcon = styled(Icon)`
  font-size: 30px;
  padding: 0 10px;
  svg {
    fill: var(--secondary-color);
  }

  &:hover {
    opacity: .8;
}`;

const StarIcon = styled(Icon)`
  font-size: 35px;
  padding: 0 5px;
  svg {
    fill: var(--secondary-color);
  }
}`;

const StyledArtist = styled(Artist)`
  color: var(--fourth-color);
  font-size: 14px;
  font-weight: normal;
`;

const StyledSong = styled(Song)`
  font-size: 14px;
  font-weight: normal;
`;

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;



const SongQueueItem: React.FC<{ songQueueItem: SongQueue }> = ({ songQueueItem }) => {

  const song: CurrentSong = JSON.parse(songQueueItem.song);
  const songUserEmail = songQueueItem.user_id;
  const userEmail = useSelector((state: any) => state.user.userProfile.email)

  return (
    <ListItem className="ListItem">
      <RowContainer>
        <img height="60px" width="60px" src={song.album_cover[0]} />
        <ColContainer>
          <StyledSong>{song.title}</StyledSong>
          <StyledArtist>{song.artist}</StyledArtist>
        </ColContainer>
      </RowContainer>
      <RowContainer>
        {userEmail === songUserEmail && <StarIcon type="star" theme="outlined" />}
        <DiamondIcon type="sketch-circle" theme="filled" />
      </RowContainer>
    </ListItem>
  );
}

export default SongQueueItem;

