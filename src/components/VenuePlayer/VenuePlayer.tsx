import React from 'react';
import { VenuePlayerProps } from '../../types';
import styled from 'styled-components';
import { Progress, Icon } from 'antd';
import { CenteredContent, Song, Artist } from '../../assests/globalStyles';
import moment from 'moment';
import 'moment-duration-format';


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
  font-size: 80px;
  margin: 70px;
  svg {
    color: var(--fourth-color);
  }
  opacity: .5;

  &:hover {
    opacity: .8;
  }
`;
const TimerCount = styled.div`
  letter-spacing: 2px;
  font-size: 14px;
  color: var(--secondary-color);
`;


const VenuePlayer: React.FC<VenuePlayerProps> = ({currentSong, tooglePlay, playing, position}) => {
    let start = moment.duration(position).format("*mm:ss")
    let end = moment.duration(currentSong.duration).format("*mm:ss")
  return (
    <CenteredContent className="VenuePlayer">
        <img src={currentSong.album_cover} />
        <SongPlayer>{currentSong.title}</SongPlayer>
        <ArtistPlayer>{currentSong.artist}</ArtistPlayer>
        <Progress percent={position * 100 / currentSong.duration} strokeWidth={4} showInfo={false} strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
        <TimerCount>
          {start}{end}
        </TimerCount>
        <PlayIcon type={playing ? "pause-circle" : "play-circle"} theme="filled" onClick={tooglePlay}/>
    </CenteredContent>
  );
}

export default VenuePlayer;
