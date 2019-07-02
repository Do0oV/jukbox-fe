import React from 'react';
import { VenuePlayerProps } from '../../types';
import styled from 'styled-components';
import { Progress, Icon } from 'antd';
import { CenteredContent, Song, Artist } from '../../assests/globalStyles';
import moment from 'moment';
import 'moment-duration-format';

const ArtistPlayer = styled(Artist)`
  color: var(--fourth-color);
  font-size: 18px;
  letter-spacing: 4px;
  margin: 10px 0 20px 0;

  @media(min-width: 800px) {
    font-size: 22px;
  }
`;

const SongPlayer = styled(Song)`
  font-size: 24px;
  letter-spacing: 4px;
  margin: 40px 0 0 0;

  @media(min-width: 800px) {
    font-size: 28px;
    letter-spacing: 6px;
    margin: 40px 0 0 0;
  }
`;

const PlayIcon = styled(Icon)`
  font-size: 65px;
  margin: 40px;
  svg {
    color: var(--fourth-color);
  }
  opacity: .5;

  &:hover {
    opacity: .8;
  }

  @media(min-width: 800px) {
    font-size: 100px;
  }
`;

const AlbumCover = styled.img`
  width: 220px;
  height: 202px;
  margin-top: 50px;

  @media(min-width: 800px) {
    margin-top: 30px;
    width: 250px;
    height: 250px;
  }
`;
const TimerCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  letter-spacing: 2px;
  font-size: 14px;
  color: var(--fourth-color);

  @media(min-width: 800px) {
    font-size: 18px;
  }
`;

const VenuePlayer: React.FC<VenuePlayerProps> = ({currentSong, tooglePlay, playing, position}) => {
    let current = moment.duration(position).format("*m:ss");
    let end = moment.duration(currentSong.duration).format("*m:ss");
  return (
    <CenteredContent className="VenuePlayer">
    {currentSong.title &&
      <>
        <AlbumCover src={currentSong.album_cover} />
        <SongPlayer>{currentSong.title}</SongPlayer>
        <ArtistPlayer>{currentSong.artist}</ArtistPlayer>
        <Progress percent={position * 100 / currentSong.duration} strokeWidth={4} showInfo={false} strokeColor={'var(--tertiary-color)'}>Progress Bar</Progress>
        <TimerCount>
          <div>{current}</div>
          <div>{end}</div>
        </TimerCount>
        <PlayIcon type={playing ? "pause-circle" : "play-circle"} theme="filled" onClick={tooglePlay}/>
      </>}
    </CenteredContent>
  );
}

export default VenuePlayer;
