import React from 'react';
import { VenuePlayerProps } from '../../types';
import styled from 'styled-components';
import { Progress, Icon } from 'antd';
import { CenteredContent, Song, Artist } from '../../assests/globalStyles';
import moment from 'moment';
import './VenuePlayer.css';
import 'moment-duration-format';


const ArtistPlayer = styled(Artist)`
  color: var(--fourth-color);
  font-size: 16px;
  letter-spacing: 4px;
  margin: 10px 0 20px 0;
  text-align: center;

  @media(min-width: 800px) {
    font-size: 22px;
  }
`;

const SongPlayer = styled(Song)`
  font-size: 17px;
  letter-spacing: 4px;
  margin: 25px 0 0 0;
  text-align: center;

  @media(min-width: 800px) {
    font-size: 28px;
    letter-spacing: 6px;
    margin: 40px 0 0 0;
  }
`;

const PlayIcon = styled(Icon)`
  font-size: 65px;
  margin: 20px;
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
  position: relative;
  top: 5%;
  left: 5%;
  border-radius: 50%;
  height: 90%;
  width: 90%;
`;

const TimerCount = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0 20px 0;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 14px;
  color: var(--fourth-color);

  @media(min-width: 800px) {
    font-size: 18px;
  }
`;

const adjustLength = function(text: string) {
  return text.length > 30 ? text.slice(0,30) + '...' : text;
}


const VenuePlayer: React.FC<VenuePlayerProps> = ({currentSong, togglePlay, playing, position}) => {
    let current = moment.duration(position).format("*m:ss");
    let end = moment.duration(currentSong.duration).format("*m:ss");
  return (
    <CenteredContent className="VenuePlayer">
    {currentSong.title &&
      <>
        <TimerCount className='timer'>
          <div>{current}</div>
          <div>{' / '}</div>
          <div>{end}</div>
        </TimerCount>
        <div className='img-container'>
          <AlbumCover src={currentSong.album_cover} className='albumPlayer'/>
          <Progress type='circle' percent={position * 100 / currentSong.duration} strokeWidth={1.5} 
          showInfo={false} className='progressp'></Progress>
        </div>
          <SongPlayer className='songPlayer'>{adjustLength(currentSong.title)}</SongPlayer>
          <ArtistPlayer className='artistPlayer'>{adjustLength(currentSong.artist)}</ArtistPlayer>
        <PlayIcon className='playIcon' type={playing ? "pause-circle" : "play-circle"} theme="filled" onClick={togglePlay}/>
      </>}
    </CenteredContent>
  );
}

export default VenuePlayer;
