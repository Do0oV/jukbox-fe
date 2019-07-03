import React from 'react';
import './SongQueueItem.css';
import { ListItem, Artist, Song } from '../../assests/globalStyles';
import styled from 'styled-components';
import { Icon, Modal } from 'antd';
import { SongQueue, CurrentSong } from '../../types';
import { useSelector, useDispatch } from 'react-redux';
import { updateSongDiamonds, getUserProfile } from '../../redux/actions'
const { confirm } = Modal;

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
  
  const dispatch = useDispatch();

  const song: CurrentSong = JSON.parse(songQueueItem.song);
  const songUserEmail = songQueueItem.user_id;
  const userEmail = useSelector((state: any) => state.user.userProfile.email)
  const accessToken = useSelector((state: any) => state.user.accessToken)
  
  const showConfirm = () => {
    confirm({
      title: `Do you want to spend 5 diamonds to promote this song?`,
      onOk() {
        songQueueItem.id && dispatch(updateSongDiamonds(songQueueItem.id, accessToken))
        dispatch(getUserProfile());
      }
    });
  }
  
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
        <DiamondIcon type="sketch-circle" theme="filled" onClick={showConfirm}/>
      </RowContainer>
    </ListItem>
  );
}

export default SongQueueItem;

