import React from 'react';
import './NowPlaying.css';
import { Row, Col, Progress } from 'antd';
import styled from 'styled-components';
import { NowPlayingProps } from '../../types';
import { ListItem } from '../../assests/globalStyles';

const Container = styled.div`
  background-color: var(--secondary-bg-color);
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const SubContainer = styled(ListItem)`
  margin: 10px 0;
  height: 100%;
`;

const Song = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.6em;
  color: var(--secondary-color);
`;

const Artist = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.6em;
  font-weight: bold;
  color: var(--primary-bg-color);
`;

const Now = styled.h2`
  margin: 0;
  line-height: 2em;
  font-size: 22px;
  color: var(--fourth-color);
  font-style: italic;
`;

const RightCol = styled(Col)`
  text-align: right;
`;

const Album = styled.img`
  height: 85px;
  width: 85px;
`;

const NowPlaying: React.FC<NowPlayingProps> = ({ currentSong }) => {
  const songData = currentSong !== undefined
    ? JSON.parse(currentSong.song)
    : {
        'album_cover': [''],
        'title': '',
        'artist': ''
      };

  return (
    <>
      {currentSong && 
      <Container>
        <SubContainer>
           <Album src={songData.album_cover[0]}/>
         <RightCol>
           <Now>Now Playing</Now>
           <Song>{songData.title}</Song>
           <Artist>{songData.artist}</Artist>
         </RightCol>
        </SubContainer>
      </Container>}
    </>
  );
}

export default NowPlaying;
