import React from 'react';
import './NowPlaying.css';
import { Row, Col, Progress } from 'antd';
import styled from 'styled-components';
import { NowPlayingProps } from '../../types';

const RowHeader = styled(Row)`
  background-color: var(--secondary-bg-color);
  padding: 10px;
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
  const songData = JSON.parse(currentSong.song);

  return (
    <RowHeader type="flex" justify="space-around" className="NowPlaying" align="middle">
     <Col>
       <Album src={songData.album_cover[0]}/>
     </Col>
     <RightCol>
       <Now>Now Playing</Now>
       <Song>{songData.title}</Song>
       <Artist>{songData.artist}</Artist>
     </RightCol>
    </RowHeader>
  );
}

export default NowPlaying;
