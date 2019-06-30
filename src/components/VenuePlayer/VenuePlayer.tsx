import React from 'react';
import { VenuePlayerProps } from '../../types';
import styled from 'styled-components';
import { Progress, Icon } from 'antd';
import { CenteredContent, Song, Artist } from '../../assests/globalStyles';


const ArtistPlayer = styled(Artist)`
  color: var(--fourth-color);
  font-size: 22px;
  letter-spacing: 4px;
  margin: 20px 0;
`;

const SongPlayer = styled(Song)`
  font-size: 28px;
  letter-spacing: 6px;
  margin: 40px 0 0 0;
`;

const PlayIcon = styled(Icon)`
  font-size: 120px;
  margin: 70px;
  svg {
    color: var(--fourth-color);
  }
  opacity: .5;

  &:hover {
    opacity: .8;
  }
`;

const VenuePlayer: React.FC<VenuePlayerProps> = ({currentSong, tooglePlay}) => {
  return (
    <CenteredContent className="VenuePlayer">
        <img src={currentSong.album_cover} />
        <SongPlayer>{currentSong.title}</SongPlayer>
        <ArtistPlayer>{currentSong.artist}</ArtistPlayer>
        <Progress percent={45} strokeWidth={4} showInfo={false} strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
        <PlayIcon type="play-circle" theme="filled" onClick={tooglePlay}/>
    </CenteredContent>
  );
}

export default VenuePlayer;
