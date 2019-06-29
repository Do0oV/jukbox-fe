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

const VenuePlayer: React.FC<VenuePlayerProps> = ({currentSong, startSession}) => {
  return (
    <CenteredContent className="VenuePlayer">
        <img src='https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2' />
        <SongPlayer>Cut To The Feeling</SongPlayer>
        <ArtistPlayer>Carly Rae Jepsen</ArtistPlayer>
        <Progress percent={45} strokeWidth={4} showInfo={false} strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
        <PlayIcon type="play-circle" theme="filled"/>
    </CenteredContent>
  );
}

export default VenuePlayer;
